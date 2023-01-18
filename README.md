Andee.begin()
let widget = Andee.createJoystickWidget(
WidgetId.Widget_1,
WidgetPosition.Row0_Column0,
WidgetLength.Full,
WidgetColour.Red,
"Title",
"100",
"100"
)
basic.forever(function () {
    widget.update()
    serial.writeString("" + (Andee.getJoystick()))
})



> Open deze pagina op [https://wannes-hub.github.io/andee/](https://wannes-hub.github.io/andee/)

## Gebruiken als extensie

Deze repository kan worden toegevoegd als **extensie** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klik op **Nieuw project**
* klik op **Extensies** onder het tandwielmenu
* zoeken naar **https://github.com/wannes-hub/andee** en importeren

## Dit project bewerken ![Badge buildstatus](https://github.com/wannes-hub/andee/workflows/MakeCode/badge.svg)

Om deze repository te bewerken in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klik op **Importeren** en klik vervolgens op **Importeer URL**
* plak **https://github.com/wannes-hub/andee** en klik op importeren

## Voorbeeld van blokken

Deze afbeelding toont de blokcode van de laatste bevestiging in de master.
Deze afbeelding kan enkele minuten duren om te vernieuwen.

![Een gerenderde weergave van de blokken](https://github.com/wannes-hub/andee/raw/master/.github/makecode/blocks.png)

#### Metadata (gebruikt voor zoeken, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
