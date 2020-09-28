// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-gray; icon-glyph: microchip;

let bgImage = await getImage("https://raw.githubusercontent.com/MisutaaUrufu/iOS-System-14-Theme/master/Light/Scriptable/graphics/Classic/Light/widget.png")
let widget = await createWidget()

// Check if the script is running in
// a widget. If not, show a preview of
// the widget to easier debug it.
if (!config.runsInWidget) {
  await widget.presentMedium()
}

// Tell the system to show the widget.
Script.setWidget(widget)
Script.complete()

function buildInterface() {
	let bg = bgImage
	let context = new DrawContext()
	
	context.respectScreenScale = false
	
	let os = Device.systemName()
	let ver = Device.systemVersion()
	let dev = Device.model()
	let name = Device.name()
	let bStat = Device.batteryLevel().toFixed(2) * 100
	let lang = Device.language() 
	let loc = Device.locale()
	let pRes = Device.screenResolution()
	
	let pStat = "Charger is not connected."
	
	if (!Device.isDischarging() || Device.isCharging()) {
		pStat = "Charger is connected."
	}
	
	let rec = new Rect(0, 0, 1024, 482)
	
	context.size = new Size(1024, 482)
	
	if (bg != null) {
		context.drawImageInRect(bg, rec)
	}
	
	let charcoal = new Font("Charcoal", 32)
	context.setFont(charcoal)
	context.setTextColor(Color.black())
	context.setTextAlignedLeft()
	
	let lText = "Language: " + lang.toUpperCase()
	
	
	let vText = os + " version " + ver
	let bText = "Battery Level: " + bStat.toFixed(0) + "%"
	
	context.drawText(vText, new Point(692, 43))
	context.drawText(dev, new Point(692, 91))
	context.drawText(name, new Point(692, 139))
	
	context.drawText(lText, new Point(527, 241))
	
	context.drawText(bText, new Point(527, 357))
	context.drawText(pStat, new Point(527, 405))
	
	let img = context.getImage()
	return img
}

async function getImage(url) {
	let req = new Request(url)
	return await req.loadImage()
}

async function createWidget() {
  let bg = buildInterface()
  let w = new ListWidget()

  if (bg != null) {
    w.backgroundImage = bg
  }
  return w
}