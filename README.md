# SCRATCH-GUI 项目

## 项目简介

## 目录结构

- components 模块

```shell
components/
├── action-menu
├── alerts
├── asset-panel
├── audio-trimmer
├── backpack
├── blocks
├── box
├── browser-modal
├── button
├── camera-modal
├── cards
├── close-button
├── coming-soon
├── connection-modal
├── context-menu
├── controls
├── crash-message
├── custom-procedures
├── direction-picker
├── divider
├── drag-layer
├── filter
├── forms
├── green-flag
├── gui
├── icon-button
├── language-selector
├── library
├── library-item
├── loader
├── loupe
├── menu
├── menu-bar # 菜单栏
├── meter
├── mic-indicator
├── modal
├── monitor
├── monitor-list
├── prompt
├── question
├── record-modal
├── slider-prompt
├── sound-editor
├── spinner
├── sprite-info
├── sprite-selector
├── sprite-selector-item
├── stage
├── stage-header
├── stage-selector
├── stage-wrapper
├── stop-all
├── tag-button
├── target-pane
├── telemetry-modal
├── turbo-mode
├── watermark
├── waveform
└── webgl-modal
```

- container 模块

```shell
containers/
├── account-nav.jsx
├── alert.jsx
├── alerts.jsx
├── audio-trimmer.jsx
├── auto-scanning-step.jsx
├── backdrop-library.jsx
├── backpack.jsx
├── blocks.jsx # scratch-blockly 的初始化和配置容器, 应该是使用 blockly 相同的方法
├── camera-modal.jsx
├── cards.jsx
├── connection-modal.jsx
├── controls.jsx
├── costume-library.jsx
├── costume-tab.jsx
├── custom-procedures.jsx
├── deletion-restorer.jsx
├── direction-picker.jsx
├── dom-element-renderer.jsx
├── drag-layer.jsx
├── error-boundary.jsx
├── extension-library.jsx
├── green-flag-overlay.jsx
├── gui.jsx
├── inline-messages.jsx
├── language-selector.jsx
├── library-item.jsx
├── list-monitor.jsx
├── menu-item.jsx
├── menu.jsx
├── modal.jsx
├── monitor-list.jsx
├── monitor.jsx
├── paint-editor-wrapper.jsx
├── playback-step.jsx
├── project-watcher.jsx
├── prompt.jsx
├── question.jsx
├── record-modal.jsx
├── recording-step.jsx
├── sb-file-uploader.jsx
├── sb3-downloader.jsx
├── scanning-step.jsx
├── slider-monitor.jsx
├── slider-prompt.jsx
├── sound-editor.jsx
├── sound-library.jsx
├── sound-tab.jsx
├── sprite-info.jsx
├── sprite-library.jsx
├── sprite-selector-item.jsx
├── stage-header.jsx
├── stage-selector.jsx
├── stage-wrapper.jsx
├── stage.jsx
├── tag-button.jsx
├── target-highlight.jsx
├── target-pane.jsx
├── tips-library.jsx
├── turbo-mode.jsx
├── watermark.jsx
└── webgl-modal.jsx
```
