[Back to Polythene List Tile main page](../list-tile.md)

# List Tile component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[List Tile options](../list-tile.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/gmdcvjeL/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { ListTile } from "polythene-react"

<ListTile title="My title" />
~~~

To show the subtitle on 1 line:

~~~jsx
<ListTile
  title="My title"
  subtitle="My subtitle"
/>
~~~

To show a long subtitle running on 2 lines:

~~~jsx
<ListTile
  title="My title"
  highSubtitle="My loooooooooooong subtitle"
/>
~~~

To show an icon:

~~~javascript
import React from "react"
import { ListTile, Icon } from "polythene-react"

<ListTile
  title="My title"
  front={<Icon
    type="large"
    avatar={true}
    src="app/images/1.png"
  />}
/>
~~~

Or use an SVG as icon:

~~~javascript
const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

// ...
front={<Icon
  svg={{ content: starsSVG }}
/>}
~~~

<a id="links"></a>
### Links

Both primary and secondary content can be set as link. For a general principle, see: [URLs and router links](../../handling-urls.md).


To make the primary content a link:

~~~jsx
import React from "react"
import { List, ListTile, Icon } from "polythene-react"
import { withRouter } from "react-router-dom"

withRouter(({ history }) =>
  <List>
    <ListTile
      title="Jennifer Barker"
      subtitle="Starting post doc"
      front={<Icon
        src="images/jennifer.png"
        avatar={true}
        type="large"
      />}
      url={{
        href: "/friends/jennifer", // not required, but makes this a real link
        onClick: e => (
          e.preventDefault(),
          history.push("/friends/jennifer")
        )
      }}
    />
  </List>
)
~~~

To show secondary content at the right, including a link:

~~~jsx
import React from "react"
import { List, ListTile, Icon } from "polythene-react"
import { withRouter } from "react-router-dom"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

// ..withRouter, List
<ListTile
  title="My title"
  secondary={{
    icon: {
      size: "small",
      svg: { content: starsSVG }
    },
    url: {
      href: "/friends/jennifer"
      onClick: e => (
        e.preventDefault(),
        history.push("/friends/jennifer")
      )
    }
  })
/>
~~~

<a id="appearance"></a>
## Appearance

* Following Material Design specs, a list tile can have 1 to 3 lines (except when using `subContent`):
  * `title`: title on a single line
  * `subtitle`: subtitle on a single line
  * `highSubtitle`: subtitle runs over 2 lines
  * Use option `compact` to reduce the vertical padding
  * Use option `subContent` to show any other content below the title
* A title line can optionally have more than 1 line of text when using a custom theme, see below.
* A list tile can optionally have an icon.
* Text and icon are taken together as primary content. Primary content can optionally have a link.
* A list tile can optionally have secondary content, displayed to the right. Secondary content can contain any content, and conditionally have a link.
* Front content can be reduced in width with `compactFront`. Following the Material Design specs, this setting should be used for displaying a list of search results.
* Use option `navigation` to use a Material Design navigation style, as specified in [navigation drawers](https://material.io/guidelines/patterns/navigation-drawer.html).


<a id="styling"></a>
### Styling

Below are examples how to change the list tile appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { ListTileCSS } from "polythene-css"

ListTileCSS.addStyle(".themed-list-tile", {
  color_light_title:      "#424242",
  color_light_background: "#FFECB3",
  color_dark_title:       "#FFECB3",
  color_dark_background:  "#5D4037",
  font_size_title:        21
})

<ListTile className="themed-list-tile" />
~~~

To show a title running on maximum of 2 lines:

~~~jsx
ListTileCSS.addStyle(".list-tile-high-title", {
  title_line_count: 2
})

<ListTile
  className="list-tile-high-title"
  title="The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
/>
~~~

<a id="css"></a>
#### CSS

Change CSS using the [List Tile CSS classes](../../../packages/polythene-css-classes/list-tile.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/list-tile"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
<ListTile
  style={{
    color: "#fff",
    backgroundColor: "#EF6C00"
  }}
/>
~~~


<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of List Tile content is reversed when the List Tile is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


