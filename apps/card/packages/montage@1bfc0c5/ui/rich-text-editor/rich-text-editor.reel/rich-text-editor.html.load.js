montageDefine("1bfc0c5","ui/rich-text-editor/rich-text-editor.reel/rich-text-editor.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=rich-text-editor.css>\n    <script type="text/montage-serialization">{"overlay":{"prototype":"ui/slot.reel","properties":{"element":{"#":"editor-slot"},"delegate":{"@":"owner"}}},"owner":{"prototype":"ui/rich-text-editor/rich-text-editor.reel","properties":{"element":{"#":"rich-text-editor-container"},"_overlaySlot":{"@":"overlay"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=rich-text-editor-container>\n        <div class=montage-Editor contenteditable=false></div>\n        <div data-montage-id=editor-slot class=montage-Editor-overlay></div>\n    </div>\n</body>\n</html>'})