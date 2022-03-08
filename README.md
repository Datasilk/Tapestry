# Tapestry
#### A UI framework for websites
Tapestry is a UI framework written in LESS and compiled to CSS and was built to support the development of common dashboard UI elements including a layout grid, form elements, buttons, lists, menus, spreadsheets, & messages. Developing themes for these UI elements is simple & straight-forward using various LESS functions provided by Tapestry to define colors. In essence, to use Tapestry within your project, add `@import /less/tapestry/tapestry.less` to your website
LESS file, then create a theme LESS file defining colors for various sections of your website UI, then build your UI using HTML and the few simple class names provided by Tapestry.

## Installation
1. Clone https://github.com/Datasilk/Tapestry into your project
2. Add Tapestry to your website LESS file `@import less/tapestry/tapestry.less` or compile Tapestry to CSS and include it in your website header `<link rel="stylesheet" type="text/css" href="css/tapestry.css"/>`
3. Create one or more themes for your website, for example: `/less/themes/default.less`
4. Either add your theme file to your website LESS file `@import /less/themes/default.less` or compile the theme to CSS and include it in your website header `<link rel="stylesheet" type="text/css" href="css/themes/default.css"/>`. If you choose to load your theme separately, you could design a feature on your website allowing your users to change the theme for your website with a drop down list of themes to select from.
5. Write clean HTML using the few simple class names provided by Tapestry

## Themes
Define unique color schemes for various sections of your website UI by executing LESS functions provided by Tapestry within your CSS selectors. For example:

```less
@import 'less/tapestry/theme.less'

body{
    .box(#eee, transparent, #555);
    .links(#00a8a3, #009bbe, #00abc3, #00a8a3);
    .row(transparent, #ccefe7, #b5ccca, #444, #006a78, #13474F, #009B87, #006fe8, #006fe8, #006fe8, #00B4FF, #555, #009B87, #00A46C, #185A64);
    .fonts(#222, fade(#222, 30%), #009B87, #4DA400, #FF2222, #376EB2);
    .input(#fff, #444, #cccccc, #aaa, #ffffff, #444, #77c8b6, #fff, #444, #b1dcdc, #8c8c8c, #009875 );
    .line(#e6e6e6); 
    .button(default,  #2ca038, #17b45d, #17b45d, #17b45d, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #fff, #fff, #fff, #fff);
    .button(cancel,   #b5b4b4, #00a6e7, #00a6e7, #00a6e7, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #fff, #fff, #fff, #fff);
    .button(disabled, #a9d7ec, #a9d7ec, #a9d7ec, #a9d7ec, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #fff, #fff, #fff, #fff);
    .button(delete,   #d07d7d, #c95454, #c95454, #c95454, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #fff, #fff, #fff, #fff);
    .message(default, #8ccaef, transparent, #0066ff);
    .message(error,   #f46f6f, transparent, #fff);
    .message(alert,   #dbdb86, transparent, #d79c0c); 
    .message(confirm, #92e061, transparent, #228f4b);

    @perc:3%;
    @perc2:1%;
    .table(
        #d1eff2, #2a898d, #0c7946, #00ab5b, #00ab5b, #0c7946,
        #fafafa, #ddf0f0, #5EC7CE, #444, #1e3b41, #00343e, #009B87, #00C5C7, #00C5C7, #00C5C7, #009B87, #00C5C7, #00C5C7, #00C5C7,
        darken(#fafafa, @perc), darken(#ddf0f0, @perc2), darken(#5EC7CE, @perc2), darken(#444, @perc), darken(#1e3b41, @perc), 
        darken(#00343e, @perc), darken(#009B87, @perc), darken(#00C5C7, @perc), darken(#00C5C7, @perc), darken(#00C5C7, @perc), 
        darken(#009B87, @perc), darken(#00C5C7, @perc), darken(#00C5C7, @perc), darken(#00C5C7, @perc)
    );
}

header{
    .box(#2ca038, transparent, #fff);
    .links(#fff, #fff, #fff, #fff);
    .icons(#fff, #fff, #fff, #fff, true);
} 

.sidebar{
    .box(#2d2d2d, transparent, #fff);
    .links(#fff, #fff, #fff, #fff);
    .icons(#fff, #fff, #fff, #fff);
    .row(transparent, #0d4b55, #0c645f, #eee, #fff, #fff, #eee, #fff, #fff, #eee, #fff, #eee, #fff, #fff, #fff);
    .row .icon.small{
        .icons(#fff, #b6ff00, #fff, #fff); 
    }
}
```

In the example above, we define themes for the body of our website, the header area of the UI, and a side bar area of the UI. We also add a slight modification to small icons within our side bar rows.

### LESS functions for your theme
Here is a complete list of functions that you can use to define your themes.

|function|argument|description|
|---|---|---|
|**.box**||A set of colors used to define the theme of the CSS selector the function is contained within.|
||@box-bg|The `background-color` property of the CSS selector|
||@box-border|The `border-color` property of the CSS selector|
||@box-font|The `color` property of the CSS selector|
|**.links**||A set of colors used to define anchor links within the CSS selector, including SVG icon colors within the anchor links|
||@a-color|The font color of the anchor link.|
||@a-hover|The font color of the anchor link when the user is hovering over the anchor link with their mouse|
||@a-active|The font color of the anchor link when the user is pressing down on the anchor link|
||@a-visited|The font color of the anchor link when the user has already visited the URL of the `href` attribute|
||@important|When `true`, add `!important` to all properties within the **.links** function to override previous link properties|
|**.icons**||A set of colors used to define SVG icons within the CSS selector|
||@a-color|The font color of the SVG icon|
||@a-hover|The font color of the SVG icon when the user is hovering over the anchor link with their mouse|
||@a-active|The font color of the SVG icon when the user is pressing down on the anchor link|
||@a-visited|The font color of SVG icon when the user has already visited the URL of the `href` attribute|
||@important|When `true`, add `!important` to all properties within the **.icons** function to override previous icon properties|
|**.fonts**||A set of colors used to define various types of text within the UI|
||@header|The font color of header elements (`<h1>` through `<h6>`)|
||@faded|The font color of HTML elements that use the `faded` class|
||@price|The font color of HTML elements that contains monitary text (e.g. *$15.95*) and uses the `price` class|
||@positive|The font color of HTML elements that contains text of a positive number and uses the `positive` class|
||@negative|The font color of HTML elements that contains text of a negative number and uses the `negative` class|
||@time|The font color of HTML elements that contains text of a date and/or time and uses the `time` class|
|**.row**||A set of colors used to define the content of HTML elements that use the `.row` class|
||@bg|The `background-color` of the row |
||@hover|The `background-color` of the row when the user hovers over the row with their mouse cursor or touches the row with their finger on mobile devices|
||@selected|The `background-color` of the row when the row includes the `selected` class. This will override the @hover color|
||@font|The font color of the row |
||@font-hover|The font color of the row when the user hovers over the row with their mouse cursor or touches the row with their finger on mobile devices|
||@font-selected|The font color of the row when the row includes the `selected` class. This will override the @font-hover color|
||@a-link|The font color of an anchor link inside the row.|
||@a-hover|The font color of an anchor link inside the row when the user is hovering over the anchor link with their mouse|
||@a-active|The font color of an anchor link inside the row when the user is pressing down on the anchor link|
||@a-visited|The font color of an anchor link inside the row when the user has already visited the URL of the `href` attribute|
||@a-selected|The font color of an anchor link inside the row when the row includes the `selected` class. This will override the @a-link and @a-visited colors|
||@icon-link|The font color of SVG icons inside the row.|
||@icon-hover|The font color of SVG icons inside the row when the user is hovering over the anchor link with their mouse|
||@icon-active|The font color of SVG icons inside the row when the user is pressing down on the anchor link|
||@icon-visited|The font color of SVG icons inside the row when the user has already visited the URL of the `href` attribute|
||@icon-selected|The font color of SVG icons inside the row when the row includes the `selected` class. This will override the @a-link and @a-visited colors|
||@has-class|Used to specify a class name that the row must contain in order to style the row (e.g. `@has-class=special` will style HTML elements that contain `class="row special"`)|
|**.input**||A set of colors used to style form fields, such as text boxes, drop down lists, and checkboxes|
||@input-bg|The `background-color` of the input element|
||@input-color|The font color of the input element|
||@input-border|The border color of the input element|
||@input-placeholder|The font color of the placeholder text within the input element|
||@input-bg-hover|The `background-color` of the input element when the user hovers over the input element with their mouse cursor|
||@input-color-hover|The font color of the input element when the user hovers over the input element with their mouse cursor|
||@input-border-hover|The border color of the input element when the user hovers over the input element with their mouse cursor|
||@input-bg-focus|The `background-color` of the input element when the user gives the input element focus|
||@input-color-focus|The font color of the input element when the user gives the input element focus|
||@input-border-focus|The border color of the input element when the user gives the input element focus|
||@input-label|The font color of any labels displayed above or next to a form field|
||@input-label-hover|The font color of the label displayed above or next to a form field when the user hovers over the form element row (which contains the class `row`)|
|**.button**||A set of colors used to style buttons, which could be an anchor link, `<button>` element, `<input type="submit">` element, or `<div>` element|
||@name|A unique name that must be included within the button's class attribute (e.g. `class="button apply"`)|
||@bg|The `background-color` of the button|
||@bg-hover|The `background-color` of the button when the user hovers over the button with their mouse cursor|
||@bg-active|The `background-color` of the button when the user is pressing down on the button|
||@bg-selected|The `background-color` of the button when the button includes the `selected` class|
||@border|The border color of the button|
||@border-hover|The border color of the button when the user hovers over the button with their mouse cursor|
||@border-active|The border color of the button when the user is pressing down on the button|
||@border-selected|The border color of the button when the button includes the `selected` class|
||@outline|The outline color of the button|
||@outline-hover|The outline color of the button when the user hovers over the button with their mouse cursor|
||@outline-active|The outline color of the button when the user is pressing down on the button|
||@outline-selected|The outline color of the button when the button includes the `selected` class|
||@font|The font color of the button|
||@font-hover|The font color of the button when the user hovers over the button with their mouse cursor|
||@font-active|The font color of the button when the user is pressing down on the button|
||@font-selected|The font color of the button when the button includes the `selected` class|
|**.table**||A set of colors used to define the content of HTML tables (e.g. `<table></table>`) that use the `.spreadsheet` class|
||@header-bg|The `background-color` for the header row within a spreadsheet table|
||@header-font|The font color for the header row within a spreadsheet table|
||@header-a-link|The font color of an anchor link inside the header row within a spreadsheet table|
||@header-a-hover|The font color of an anchor link inside the header row when the user is hovering over the anchor link with their mouse|
||@header-a-active|The font color of an anchor link inside the header row when the user is pressing down on the anchor link|
||@header-a-visited|The font color of an anchor link inside the header row when the user has already visited the URL of the `href` attribute|
||@row-bg|The `background-color` for a row within a spreadsheet table|
||@row-hover|The `background-color` for a row within a spreadsheet table when the user is hovering over the row|
||@row-selected|The `background-color` for a row within a spreadsheet table when the row includes the `selected` class|
||@row-font|The font color of the row within a spreadsheet table|
||@row-font-hover|The font color of the row within a spreadsheet table when the user hovers over the row with their mouse cursor or touches the row with their finger on mobile devices|
||@row-font-selected|The font color of the row within a spreadsheet table when the row includes the `selected` class. This will override the @row-font-hover color|
||@row-a-link|The font color of an anchor link inside the row within a spreadsheet table.|
||@row-a-hover|The font color of an anchor link inside the row within a spreadsheet table when the user is hovering over the anchor link with their mouse|
||@row-a-active|The font color of an anchor link inside the row within a spreadsheet table when the user is pressing down on the anchor link|
||@row-a-visited|The font color of an anchor link inside the row within a spreadsheet table when the user has already visited the URL of the `href` attribute|
||@row-icon-link|The font color of SVG icons inside the row within a spreadsheet table.|
||@row-icon-hover|The font color of SVG icons inside the row within a spreadsheet table when the user is hovering over the anchor link with their mouse|
||@row-icon-active|The font color of SVG icons inside the row within a spreadsheet table when the user is pressing down on the anchor link|
||@row-icon-selected|The font color of SVG icons inside the row within a spreadsheet table when the row includes the `selected` class. This will override the @row-a-link and @row-a-visited colors|
||@row-alt-bg|The `background-color` for an alternate row within a spreadsheet table|
||@row-alt-hover|The `background-color` for an alternate row within a spreadsheet table when the user is hovering over the row|
||@row-alt-selected|The `background-color` for an alternate row within a spreadsheet table when the row includes the `selected` class|
||@row-alt-font|The font color of the alternate row within a spreadsheet table|
||@row-alt-font-hover|The font color of the alternate row within a spreadsheet table when the user hovers over the row with their mouse cursor or touches the row with their finger on mobile devices|
||@row-alt-font-selected|The font color of the alternate row within a spreadsheet table when the row includes the `selected` class. This will override the @row-font-hover color|
||@row-alt-a-link|The font color of an anchor link inside the alternate row within a spreadsheet table.|
||@row-alt-a-hover|The font color of an anchor link inside the alternate row within a spreadsheet table when the user is hovering over the anchor link with their mouse|
||@row-alt-a-active|The font color of an anchor link inside the alternate row within a spreadsheet table when the user is pressing down on the anchor link|
||@row-alt-a-visited|The font color of an anchor link inside the alternate row within a spreadsheet table when the user has already visited the URL of the `href` attribute|
||@row-alt-icon-link|The font color of SVG icons inside the alternate row within a spreadsheet table.|
||@row-alt-icon-hover|The font color of SVG icons inside the alternate row within a spreadsheet table when the user is hovering over the anchor link with their mouse|
||@row-alt-icon-active|The font color of SVG icons inside the alternate row within a spreadsheet table when the user is pressing down on the anchor link|
||@row-alt-icon-selected|The font color of SVG icons inside the alternate row within a spreadsheet table when the row includes the `selected` class. This will override the @row-a-link and @row-a-visited colors|
|**.line**|@color|The `border-top-color` of an HTML element that includes the `line` class.
|**.message**||A message box used to show a temporary message to the user, such as a success message, a warning message, or error message|
||@name|A unique name that must be included within the message class attribute (e.g. `class="message warning"`)|
||@bg|The `background-color` of the message box|
||@border|The border color of the message box|
||@font|The font color of the message box|

## HTML Classes
Tapestry comes with a set of CSS selectors that gives developers a simple toolset of class names to use when creating HTML.

#### Responsive Grid
Tapestry has a dead-simple 12 column grid system that can be used to design responsive web applications with. You can
mix & match column sizes with device types as HTML class names to create some interesting layouts across all device screen sizes.

```html
<div class="row">
    <div class="col five tablet-three mobile-twelve">
        <img src="/images/logo.png"/>
    </div>
    <div class="col seven tablet-nine mobile-twelve">
        <nav>...</nav>
    </div>
</div>
```
Notice how both columns in the above example use column sizes that when combined with device type, equal 12 columns. In this case, a PC user will see two columns at 41% & 59% width, a tablet user will see two columns at 25% & 75% width, but a mobile user will see two rows.

#### 12 Total Grid
Tapestry also includes another responsive grid with a different strategy. Each column element specifies how many columns a single row will have in total. This allows for even more complex layout configurations.

```html
<div class="row">
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-1.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-2.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-3.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-4.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-5.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-6.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-7.png"/>
    </div>
    <div class="col six-total tablet-three-total mobile-twelve">
        <img src="/images/photo-8.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-9.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-10.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-11.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-12.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-13.png"/>
    </div>
    <div class="col seven-total tablet-five-total mobile-twelve">
        <img src="/images/photo-14.png"/>
    </div>
</div>
```
In the above example, we are able to create two rows of seven photos that become three rows of five photos when displayed on a tablet screen (with one column missing since we only have 14 photos), and when displayed on a mobile device, each photo is on a separate row.

#### Form Fields
Tapestry comes with a set of HTML class names that define the layout of a simple form, including fields, inputs, and text.

```html
<div class="row hover">
    <div class="row field">First Name</div>
    <div class="row input">
        <input type="text name="firstname" placeholder="Sarah Connor"/>
    </div>
</div>
```
The above example creates a form field with the label *First Name* above the text box. When the user hovers over the parent row, the field will show a different background color and the label will show a different font color.

> Note: To make the field label and inputs align center, use the `text-center` class within the parent div that contains a `row` class.

```html
<div class="row hover">
    <div class="col field">Gender</div>
    <div class="col input">
        <select name="gender">
            <option>Male</option>
            <option>Female</option>
        </select>
    </div>
    <div class="col text faded">Optional</div>
</div>
```
The above example creates a form field with the label *Gender* on the left-hide side of a drop down list and some text on the right-hand side of the drop down list explaining the field is optional. When the user hovers over the parent row, the field will show a different background color and the label will show a different font color.

> Note: All columns with `col field` classes will have a 100 pixel width so that all field inputs will line up vertically. Use the `long` class with `col field` classes to make your column 140 pixels wide for longer labels.

> Note: To make your input field expand across an entire row, use the `expand` class with your `col input` classes.

|Class Name|Used with|Descrption|
|---|---|---|
|**row**|`<div>`,`<li>`,`<form>`|Makes a row that is 100% wide with 0 line-height|
|**col**|`<div>`, `<li>`|Makes a column that can use responsive grid class names|
|**field**|`row`, `col` classes|Used to display a form field label|
|**input**|`row`, `col` classes|Used to display a form field, such as a text box, drop down list, checkbox, or button.|
|**text**|`col` class|Used to display some text vertically aligned with a form field & label on a single row.|
|**hover**|`row` class|Displays a different background color, font color, link color, & icon color when the user hovers over the row.|
|**hover-only**|an element inside of a `row` element|Displays an HTML element only when the user hovers over an element with class `row` that contains the element with class `hover-only`.|
|**hover-faded**|an element inside of a `row` element|Displays an HTML element only when the user hovers over an element with class `row` that contains the element with class `hover-only`. When the user is not hovering over the row, the element with class `hover-only` will have an opacity of 33%.|
|**text-center**|HTML element|Contents of the element will be centered.|
|**long**|`<input>`, `<select>`|Makes the input 100% wide|
|**short**|`<input>`|Makes the input 100 pixels wide|
|**tiny**|`<input>`|Makes the input 50 pixels wide|
|**digit**|`<input>`|Makes the input display a single digit at 25 pixels wide|
|**two-digit**|`<input>`|Makes the input display two digits at 30 pixels wide|
|**four-digit**|`<input>`|Makes the input display four digits at 50 pixels wide|
|**small**|`<textarea>`|Makes the text area 40 pixels high|
|**medium**|`<textarea>`|Makes the text area 150 pixels high|
|**tall**|`<textarea>`|Makes the text area 300 pixels high|
|**tallest**|`<textarea>`|Makes the text area 100% high|

#### Buttons
Buttons are designed to pop out so the user knows to press it. Tapestry uses a simple colored rectangle with rounded corners to signify that the element is infact a button.

|Class Name|Used with|Descrption|
|---|---|---|
|**button**|`<a>`, `<div>`, `<button>`, `<input type="submit">`|Displays a stylized button for the user to press|
|**outline**|`button` class|Displays an outline color instead of a background color for the button|
|**text**|`button` class|Displays plain text instead of a background color on the button|

####Spreadsheet
This can be used to create HTML `<table>` elements for data tables, calendars, and anything that needs a header & alternating colored rows.

```html
<table class="spreadsheet">
    <thead>
        <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>MPG</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ford</td>
            <td>GT</td>
            <td>1970</td>
            <td>12</td>
        </tr>
    </tbody>
</table>
```

|Class Name|Used with|Descrption|
|---|---|---|
|**hover-only**|an element inside of a `td` element|Displays the element when the row is hovered over within the spreadsheet|

#### Messages
Display a temporary message to the user. This can be used during form validation or when a user clicks a button.

```html
<div class="message error">An error has occurred. Please contact the website administrator</div>
```

