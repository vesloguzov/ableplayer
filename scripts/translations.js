(function ($) {
  AblePlayer.prototype.getTranslation = function (lang) {

    var en = {

      "audio": "audio",

      "video": "video",

      "playerHeading": "Media player",

      "faster": "Faster",

      "slower": "Slower",

      "play": "Plol",

      "pause": "Pause",

      "stop": "Stop",

      "restart": "Restart",

      "prevChapter": "Previous chapter",

      "nextChapter": "Next chapter",

      "prevTrack": "Previous track",

      "nextTrack": "Next track",

      "rewind": "Rewind",

      "forward": "Forward",

      "captions": "Captions",

      "showCaptions": "Show captions",

      "hideCaptions": "Hide captions",

      "captionsOff": "Captions off",

      "showTranscript": "Show transcript",

      "hideTranscript": "Hide transcript",

      "turnOnDescriptions": "Turn on descriptions",

      "turnOffDescriptions": "Turn off descriptions",

      "chapters": "Chapters",

      "newChapter": "New chapter",

      "language": "Language",

      "sign": "Sign language",

      "showSign": "Show sign language",

      "hideSign": "Hide sign language",

      "seekbarLabel": "timeline",

      "mute": "Mute",

      "unmute": "Unmute",

      "volume": "Volume",

      "volumeHelp": "Click to access volume slider",

      "volumeUpDown": "Volume up down",

      "volumeSliderClosed": "Volume slider closed",

      "preferences": "Preferences",

      "enterFullScreen": "Enter full screen",

      "exitFullScreen": "Exit full screen",

      "fullScreen": "Full screen",

      "speed": "Speed",

      "and": "and",

      "or": "or",

      "spacebar": "spacebar",

      "transcriptTitle": "Transcript",

      "lyricsTitle": "Lyrics",

      "autoScroll": "Auto scroll",

      "unknown": "Unknown",

      "statusPlaying": "Playing",

      "statusPaused": "Paused",

      "statusStopped": "Stopped",

      "statusWaiting": "Waiting",

      "statusBuffering": "Buffering",

      "statusUsingDesc": "Using described version",

      "statusLoadingDesc": "Loading described version",

      "statusUsingNoDesc": "Using non-described version",

      "statusLoadingNoDesc": "Loading non-described version",

      "statusLoadingNext": "Loading next track",

      "statusEnd": "End of track",

      "selectedTrack": "Selected Track",

      "alertDescribedVersion": "Using the audio described version of this video",

      "alertNonDescribedVersion": "Using the non-described version of this video",

      "fallbackError1": "Sorry, your browser is unable to play this",

      "fallbackError2": "The following browsers are known to work with this media player",

      "orHigher": "or higher",

      "prefMenuCaptions": "Captions",

      "prefMenuDescriptions": "Descriptions",

      "prefMenuKeyboard": "Keyboard",

      "prefMenuTranscript": "Transcript",

      "prefTitleCaptions": "Captions Preferences",

      "prefTitleDescriptions": "Audio Description Preferences",

      "prefTitleKeyboard": "Keyboard Preferences",

      "prefTitleTranscript": "Transcript Preferences",

      "prefIntroCaptions": "The following preferences control how captions are displayed.",

      "prefIntroDescription1": "This media player supports audio description in two ways: ",

      "prefIntroDescription2": "The current video has ",

      "prefIntroDescriptionNone": "The current video has no audio description in either format.",

      "prefIntroDescription3": "Use the following form to set your preferences related to audio description.",

      "prefIntroDescription4": "After you save your settings, audio description can be toggled on/off using the Description button.",

      "prefIntroKeyboard1": "The media player on this web page can be operated from anywhere on the page using keyboard shortcuts (see below for a list).",

      "prefIntroKeyboard2": "Modifier keys (Shift, Alt, and Control) can be assigned below.",

      "prefIntroKeyboard3": "NOTE: Some key combinations might conflict with keys used by your browser and/or other software applications. Try various combinations of modifier keys to find one that works for you.",

      "prefIntroTranscript": "The following preferences affect the interactive transcript.",

      "prefCookieWarning": "Saving your preferences requires cookies.",

      "prefHeadingKeyboard1": "Modifier keys used for shortcuts",

      "prefHeadingKeyboard2": "Current keyboard shortcuts",

      "prefHeadingDescription": "Audio description",

      "prefHeadingTextDescription": "Text-based audio description",

      "prefHeadingCaptions": "Captions",

      "prefHeadingTranscript": "Interactive Transcript",

      "prefAltKey": "Alt",

      "prefCtrlKey": "Control",

      "prefShiftKey": "Shift",

      "escapeKey": "Escape",

      "escapeKeyFunction": "Close current dialog or popup menu",

      "prefDescFormat": "Preferred format",

      "prefDescFormatHelp": "If both formats are avaialable, only one will be used.",

      "prefDescFormatOption1": "alternative described version of video",

      "prefDescFormatOption1b": "an alternative described version",

      "prefDescFormatOption2": "text-based description, announced by screen reader",

      "prefDescFormatOption2b": "text-based description",

      "prefDescPause": "Automatically pause video when description starts",

      "prefVisibleDesc": "Make description visible",

      "prefHighlight": "Highlight transcript as media plays",

      "prefTabbable": "Keyboard-enable transcript",

      "prefCaptionsFont": "Font",

      "prefCaptionsColor": "Text Color",

      "prefCaptionsBGColor": "Background",

      "prefCaptionsSize": "Font Size",

      "prefCaptionsOpacity": "Opacity",

      "prefCaptionsStyle": "Style",

      "serif": "serif",

      "sans": "sans-serif",

      "cursive": "cursive",

      "fantasy": "fantasy",

      "monospace": "monospace",

      "white": "white",

      "yellow": "yellow",

      "green": "green",

      "cyan": "cyan",

      "blue": "blue",

      "magenta": "magenta",

      "red": "red",

      "black": "black",

      "transparent": "transparent",

      "solid": "solid",

      "captionsStylePopOn": "Pop-on",

      "captionsStyleRollUp": "Roll-up",

      "prefCaptionsPosition": "Position",

      "captionsPositionOverlay": "Overlay",

      "captionsPositionBelow": "Below video",

      "sampleCaptionText": "Sample caption text",

      "prefSuccess": "Your changes have been saved.",

      "prefNoChange": "You didn't make any changes.",

      "help": "Help",

      "helpTitle": "Help",

      "save": "Save",

      "cancel": "Cancel",

      "ok": "ok",

      "done": "Done",

      "closeButtonLabel": "Close dialog",

      "windowButtonLabel": "Window options",

      "windowMove": "Move",

      "windowMoveAlert": "Drag or use arrow keys to move the window; Enter to stop",

      "windowResize": "Resize",

      "windowResizeHeading": "Resize Window",

      "windowResizeAlert": "The window has been resized.",

      "windowClose": "Close",

      "width": "Width",

      "height": "Height",

      "windowSendBack": "Send to back",

      "windowSendBackAlert": "This window is now behind other objects on the page.",

      "windowBringTop": "Bring to front",

      "windowBringTopAlert": "This window is now in front of other objects on the page."

    };

    var ru = {

      "audio": "аудио",

      "video": "видео",

      "playerHeading": "Media player",

      "faster": "Быстрее",

      "slower": "Медленнее",

      "play": "Воспроизвести",

      "pause": "Пауза",

      "stop": "Остановить",

      "restart": "Заново",

      "prevChapter": "Предыдущий раздел",

      "nextChapter": "Следующий раздел",

      "prevTrack": "Предыдущая аудиодорожка",

      "nextTrack": "Следующая аудиодорожка",

      "rewind": "Назад",

      "forward": "Вперёд",

      "captions": "Субтитры",

      "showCaptions": "Показать субтитры",

      "hideCaptions": "Скрыть субтитры",

      "captionsOff": "Отключить субтитры",

      "showTranscript": "Показать транскрипцию",

      "hideTranscript": "Скрыть транскрипцию",

      "turnOnDescriptions": "Включить описание",

      "turnOffDescriptions": "Выключить описание",

      "chapters": "Разделы",

      "newChapter": "Новый раздел",

      "language": "Язык",

      "sign": "Язык жестов",

      "showSign": "Показать язык жестов",

      "hideSign": "Скрыть язык жестов",

      "seekbarLabel": "График времени",

      "mute": "Без звука",

      "unmute": "Со звуком",

      "volume": "Громкость",

      "volumeHelp": "Нажмите, чтобы получить доступ к слайдеру громкости",

      "volumeUpDown": "Уменьшить громкость",

      "volumeSliderClosed": "Слайдер громкости закрыт",

      "preferences": "Предпочтение клавиатуры",

      "enterFullScreen": "Включить полноэкранный режим",

      "exitFullScreen": "Выйти из полноэкранного режима",

      "fullScreen": "Полноэкранный режим",

      "speed": "Скорость",

      "and": "и",

      "or": "или",

      "spacebar": "Пробел",

      "transcriptTitle": "Расшифровка",

      "lyricsTitle": "Текст аудиодорожки",

      "autoScroll": "Автопромотка",

      "unknown": "Неизвестный",

      "statusPlaying": "Воспроизведение",

      "statusPaused": "Пауза",

      "statusStopped": "Остановлено",

      "statusWaiting": "Ожидаем",

      "statusBuffering": "Буфферизация",

      "statusUsingDesc": "Использовать версию с описанием",

      "statusLoadingDesc": "Загрузить версию с описанием",

      "statusUsingNoDesc": "спользовать версию без описания",

      "statusLoadingNoDesc": "Загрузить версию без описания",

      "statusLoadingNext": "Загрузить следующую аудиодорожку",

      "statusEnd": "Конец файла",

      "selectedTrack": "Воспроизводится:",

      "alertDescribedVersion": "Using the audio described version of this video",

      "alertNonDescribedVersion": "Using the non-described version of this video",

      "fallbackError1": "Sorry, your browser is unable to play this",

      "fallbackError2": "The following browsers are known to work with this media player",

      "orHigher": "или выше",

      "prefMenuCaptions": "Титры",

      "prefMenuDescriptions": "Описание",

      "prefMenuKeyboard": "Клавиатура",

      "prefMenuTranscript": "Transcript",

      "prefTitleCaptions": "Captions Preferences",

      "prefTitleDescriptions": "Audio Description Preferences",

      "prefTitleKeyboard": "Управление клавиатурой",

      "prefTitleTranscript": "Transcript Preferences",

      "prefIntroCaptions": "The following preferences control how captions are displayed.",

      "prefIntroDescription1": "This media player supports audio description in two ways: ",

      "prefIntroDescription2": "The current video has ",

      "prefIntroDescriptionNone": "The current video has no audio description in either format.",

      "prefIntroDescription3": "Use the following form to set your preferences related to audio description.",

      "prefIntroDescription4": "After you save your settings, audio description can be toggled on/off using the Description button.",

      "prefIntroKeyboard1": "Медиаплеером на этой веб-странице можно управлять из любого места на странице с помощью сочетаний клавиш (список см. ниже).",

      "prefIntroKeyboard2": "Клавиши-модификаторы (Shift, Alt и Control) могут быть назначены ниже.",

      "prefIntroKeyboard3": "ПРИМЕЧАНИЕ: Некоторые комбинации клавиш могут конфликтовать с ключами, используемыми вашим браузером и / или другими программными приложениями. Попробуйте различные комбинации клавиш-модификаторов, чтобы найти ту, которая подходит именно вам.",

      "prefIntroTranscript": "The following preferences affect the interactive transcript.",

      "prefCookieWarning": "Saving your preferences requires cookies.",

      "prefHeadingKeyboard1": "Клавиши-модификаторы, используемые для сочетания клавиш",

      "prefHeadingKeyboard2": "Текущие сочетания клавиш",

      "prefHeadingDescription": "Описание аудиодорожки",

      "prefHeadingTextDescription": "Text-based audio description",

      "prefHeadingCaptions": "Captions",

      "prefHeadingTranscript": "Interactive Transcript",

      "prefAltKey": "Alt",

      "prefCtrlKey": "Control",

      "prefShiftKey": "Shift",

      "escapeKey": "Escape",

      "escapeKeyFunction": "Закрыть текущий диалог или всплывающее окно",

      "prefDescFormat": "Предпочитаемый формат",

      "prefDescFormatHelp": "If both formats are avaialable, only one will be used.",

      "prefDescFormatOption1": "alternative described version of video",

      "prefDescFormatOption1b": "an alternative described version",

      "prefDescFormatOption2": "text-based description, announced by screen reader",

      "prefDescFormatOption2b": "text-based description",

      "prefDescPause": "Automatically pause video when description starts",

      "prefVisibleDesc": "Make description visible",

      "prefHighlight": "Highlight transcript as media plays",

      "prefTabbable": "Keyboard-enable transcript",

      "prefCaptionsFont": "Шрифт",

      "prefCaptionsColor": "Цвет шрифта",

      "prefCaptionsBGColor": "Фон",

      "prefCaptionsSize": "Размер шрифта",

      "prefCaptionsOpacity": "Opacity",

      "prefCaptionsStyle": "Style",

      "serif": "serif",

      "sans": "sans-serif",

      "cursive": "cursive",

      "fantasy": "fantasy",

      "monospace": "monospace",

      "white": "white",

      "yellow": "yellow",

      "green": "green",

      "cyan": "cyan",

      "blue": "blue",

      "magenta": "magenta",

      "red": "red",

      "black": "black",

      "transparent": "transparent",

      "solid": "solid",

      "captionsStylePopOn": "Pop-on",

      "captionsStyleRollUp": "Roll-up",

      "prefCaptionsPosition": "Position",

      "captionsPositionOverlay": "Overlay",

      "captionsPositionBelow": "Below video",

      "sampleCaptionText": "Sample caption text",

      "prefSuccess": "Ваши изменения были сохранены.",

      "prefNoChange": "Вы не сделали никаких изменений.",

      "help": "Help",

      "helpTitle": "Help",

      "save": "Сохранить",

      "cancel": "Отменить",

      "ok": "ok",

      "done": "Готово",

      "closeButtonLabel": "Закрыть",

      "windowButtonLabel": "Window options",

      "windowMove": "Move",

      "windowMoveAlert": "Drag or use arrow keys to move the window; Enter to stop",

      "windowResize": "Изменить размер окна",

      "windowResizeHeading": "Изменить размер окна",

      "windowResizeAlert": "Размер окна изменен",

      "windowClose": "Закрыть",

      "width": "Ширина",

      "height": "Высота",

      "windowSendBack": "Вернуться назад",

      "windowSendBackAlert": "This window is now behind other objects on the page.",

      "windowBringTop": "Bring to front",

      "windowBringTopAlert": "This window is now in front of other objects on the page."

    };

    if (lang === "ru") {
      return ru;
    } else if (lang === "en") {
      return en;
    } else {
      return en;
    }
  };


})(jQuery);