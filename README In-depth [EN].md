# Macintosh Classic theme for iPhone OS 14.0
## In-Depth Installation instructions (English):
*****

###### I noticed some people have trouble figuring this stuff out, so I decided to do a more in-depth writeup. At some point I will try making a profile or shortcut that does this all for you, but until then, this will have to do.

*****

### Step 1
#### Install the wallpaper:
1. Save the wallpaper for your screen & display mode:
    * ###### iPhone (FaceID):
        * [Light Mode<sup>(link)</sup>](https://github.com/MisutaaUrufu/iOS-System-14-Theme/raw/master/Files/Background_Xʀ_Light.png)
        * [Dark Mode<sup>(link)</sup>](https://github.com/MisutaaUrufu/iOS-System-14-Theme/raw/master/Files/Background_Xʀ.png)<br/><br/>
2. Open the image in Photos, tap share, and set the image as your **Home Screen**.

*****

### Step 2 <sup>OPTIONAL</sup>
#### Install the user icons:
1. Navigate to the [Icons directory<sup>(link)</sup>](https://github.com/MisutaaUrufu/iOS-System-14-Theme/tree/master/Files/Icons).
2. For each app available you wish to add a custom icon to, save its **normal** version from this folder to **Photos** or **Files**.
    * For any app available you wish to add _to the dock_, **if you are in dark mode**, save the **`_dock`** variant of the image.
4. Create shortcuts for each app.
    * Create a folder in the **Shortcuts app** and name it `Desktop Icons`.
    * **For each app you are creating a shortcut to**, create a new shortcut in this folder.
        * In the shortcut editor, add `Open App`.
        * Set `Open App` to open the app the shortcut is for.
        * Name it `[App Name] Shortcut`, replacing `[App Name]` with the name of the app this shortcut opens, respectively.
        * In its settings (the **`...`** in the top left), select `Add to Home Screen`.
        * Rename it to just `[App Name]` or whatever you want the icon's name to show as.
        * Tap the icon by the name.
            * Choose the location where you saved the icons to (**Photo** or **File**, respectively).
            * Locate the icon for that app and select it.
        * Tap `Add`.

[See this walkthrough for more details.<sup>(link)</sup>](https://www.macrumors.com/how-to/change-app-icons/)

*****

### Step 3 <sup>OPTIONAL</sup>
#### Install the widget:
1. Install the Charcoal font via configuration profile.
    * Open [this file<sup>(link)</sup>](https://github.com/MisutaaUrufu/iOS-System-14-Theme/raw/master/Files/Charcoal%20Sans-Serif%20by%20Apple%20Inc..mobileconfig) in Safari Mobile.
    * It will prompt to allow you to install a profile. Tap `allow` then `ok`.
    * Open system settings, and navigate to `General` then `Profiles`.
    * Tap the Charcoal font profile at the top of the screen and follow the steps on screen to finish installation.
        * ###### _Note: iOS will warn that this profile is unsigned. This is **okay**. Unsigned just means it wasn't signed by a verified signing authority, and therefore cannot verify its origin. This is standard with custom, user-generated profiles._<br/><br/>
2. Install [Scriptable<sup>(link)</sup>](https://scriptable.app).
3. Open **Files** and navigate to Scriptable's home directory (_It will have the Scriptable icon on it_).
    * If Scriptable is configured to use iCloud, this will be under **iCloud Drive**.
    * If Scriptable is _not_ configured to use iCloud, this will be under **On My iPhone**.
    * If you cannot locate the Scriptable directory, and _you have launched the app at least once_, [see below<sup>(link)</sup>](#if-you-cannot-locate-the-scriptable-directory).
4. Save [this file<sup>(link)</sup>](https://github.com/MisutaaUrufu/iOS-System-14-Theme/raw/master/Files/Scriptable/About%20This%20Widget.js) to the Scriptable folder.
    * Open the file in Safari Mobile.
    * Tap **share** then **Save to Files**.
    * Navigate to _the **Scriptable** directory we located above_.
5. On the iOS Home Screen, install the Scriptable widget.
    * Enter **wiggle mode**. (_Tap & Hold_)
    * Tap the **+** icon in the top left.
    * Find and select **Scriptable** in the list towards the bottom.
    * Select the **wide** ('4x2') widget and add it to your home screen.
    * Tap the new widget **in wiggle mode**.
    * Set `Script` to `About This Widget`
    * Set `When Interacting` to `Open App`
    * Drag the widget to the **top of the screen**, on the desired page of your homescreen, so that it rests immediately under `About This iPhone`.<br/><br/>

###### If you cannot locate the Scriptable directory:
1. Create a new script in Scriptable.
2. Highlight & copy everything in [the script<sup>(link)</sup>](https://github.com/MisutaaUrufu/iOS-System-14-Theme/raw/master/Files/Scriptable/About%20This%20Widget.js) _**after**_ these lines of text; Do not copy this text:
```
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-gray; icon-glyph: microchip;
```
3. Paste it into your new script in Scriptable.
4. Edit the script's properties and set its name to `About This Widget`. Icon & Color is user's choice and does not matter.
5. Continue with step 5, `On the iOS Home Screen`, above.
