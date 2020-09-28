// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: newspaper;
// The script shows the latest article
// from MacStories in a widget on your
// Home screen. Go to your Home screen
// to set up the script in a widget.
// The script will present a preview
// of the widget when running in the
// app.
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

function getBackground() {
	let files = FileManager.iCloud()
	let documents = files.documentsDirectory()
	let backgroundPath = documents + "/graphics/Classic/Light/widget.png"
	
	if (files.downloadFileFromiCloud(backgroundPath) != null) {
		let b = files.readImage(backgroundPath)
		return b
	}
}

function buildInterface() {
	let bg = getBackground()
	let context = new DrawContext()
	
	let os = Device.systemName()
	let ver = Device.systemVersion()
	let dev = Device.model()
	let name = Device.name()
	let bStat = Device.batteryLevel().toFixed(2) * 100
	let lang = Device.language() 
	let loc = Device.locale()
	let pRes = Device.screenResolution()
	
	let pStat = "Charger is not connected."
	
	if (Device.isCharging()) {
		pStat = "Charger is connected."
	}
	
	let rec = new Rect(0, 0, 1024, 482)
	
	context.respectScreenScale = true
	
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

async function createWidget() {
  let bg = buildInterface()
  let w = new ListWidget()

  if (bg != null) {
    w.backgroundImage = bg
  }
  return w
}