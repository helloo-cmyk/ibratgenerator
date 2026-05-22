$file = 'd:\ibrat generator\ibrat-next\src\components\BratGenerator.tsx'
$lazyFile = 'd:\ibrat generator\ibrat-next\src\components\BratGeneratorLazy.tsx'
$cssFile = 'd:\ibrat generator\ibrat-next\src\app\brat-generator.css'

$content = [System.IO.File]::ReadAllText($file)

$startStr = "const BRAT_STYLES = ``" + "`n"
$startIndex = $content.IndexOf($startStr)
if ($startIndex -eq -1) {
    # Try with \r\n
    $startStr = "const BRAT_STYLES = ``" + "`r`n"
    $startIndex = $content.IndexOf($startStr)
}

if ($startIndex -ne -1) {
    $endStr = "`n``;" + "`n"
    $endIndex = $content.IndexOf($endStr, $startIndex)
    if ($endIndex -eq -1) {
        $endStr = "`r`n``;" + "`r`n"
        $endIndex = $content.IndexOf($endStr, $startIndex)
    }

    if ($endIndex -ne -1) {
        $cssContent = $content.Substring($startIndex + $startStr.Length, $endIndex - ($startIndex + $startStr.Length))
        [System.IO.File]::WriteAllText($cssFile, $cssContent)

        $newContent = $content.Substring(0, $startIndex) + $content.Substring($endIndex + $endStr.Length)
        
        $styleTag = '<style dangerouslySetInnerHTML={{ __html: BRAT_STYLES }} />'
        $newContent = $newContent.Replace($styleTag, '')
        
        [System.IO.File]::WriteAllText($file, $newContent)
        
        $lazyContent = [System.IO.File]::ReadAllText($lazyFile)
        if (-not $lazyContent.Contains('brat-generator.css')) {
            $lazyContent = $lazyContent.Replace('import { useRef } from "react";', "import { useRef } from `"react`";`nimport `"../app/brat-generator.css`";")
            [System.IO.File]::WriteAllText($lazyFile, $lazyContent)
        }
        Write-Host "Refactoring complete."
    } else {
        Write-Host "End tag not found."
    }
} else {
    Write-Host "Start tag not found."
}
