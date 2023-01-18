let tekstlijst: number[] = []
let lijst: number[] = []
Andee.begin()
let widget = Andee.createJoystickWidget(
WidgetId.Widget_1,
WidgetPosition.Row0_Column3,
WidgetLength.Half,
WidgetColour.Red,
"Title",
"100",
"100"
)
let widget_2 = Andee.createWidget(
WidgetId.Widget_1,
WidgetType.Databox,
WidgetPosition.Row2_Column1,
WidgetLength.Half,
WidgetColour.Red,
"Title",
Andee.convertNumberToString(lijst.length),
"Units"
)
basic.forever(function () {
    widget.update()
    tekstlijst = Andee.getJoystick()
    widget_2.update()
})
