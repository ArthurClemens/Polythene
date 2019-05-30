[Back to Polythene List main page](../list.md)

# List component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [List content variations](#list-content-variations)
- [Variations](#variations)
  - [Sticky headers](#sticky-headers)
  - [Keyboard control](#keyboard-control)
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

[List options](../list.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/yzba5Lvn/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { List, ListTile } from "polythene-react"

<List header={{ title: "Friends" }}>
  <ListTile title="Jennifer Barker" />
  <ListTile title="Ali Connors" />
</List>
~~~

The list header will be also rendered using a list tile.

<a id="list-content-variations"></a>
## List content variations

See [List Tile](list-tile.md) for layout variations, for example to add links, icons and images. 


<a id="variations"></a>
## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](https://material.io/guidelines/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [List Tiles](../list-tile.md), and set `indentedBorder` to true. For example:

~~~jsx
import React from "react"
import { List, ListTile } from "polythene-react"

<List
  indentedBorder
  tiles={[
    <ListTile title="Jennifer Barker" indent />
  ]}  
/>
~~~

<a id="sticky-headers"></a>
### Sticky headers

To create alternating sticky headers, the list header gets CSS property `position: sticky`. However this property [does not work in IE or Edge](http://caniuse.com/#feat=css-sticky), so its use is a bit limited.

If you do choose to use it, add some styles to the container that holds the lists:

~~~css
.scrollable-list {
  max-height: 15rem; /* some height */
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  /* prevent that the scrollbar gets obscured by the sticky headers (!) */
  position: relative;
  z-index: 1;
}
~~~



<a id="keyboard-control"></a>
### Keyboard control

Sometimes it is useful to enable selecting list values with the keyboard, for instance with autocomplete search suggestions.

Visually, tiles can be visually marked using List's `hoverable` and [List Tile's](../list-tile.md) `highlight` and `selected`.

To give a list keyboard control, it must first receive focus, either with a click or from a parent element that has focus. List Tile elements can receive focus because they have attribute `tabindex=0` by default.

To keep track of the selected element, wrap the list in a stateful component. The component will also handle key input.

In this example we are creating a list that accepts a click to create the first selection, then accepts arrow keys to move the selection up and down, and the Escape key to remove the selection.

A more elaborate example is given in [Search - Results list](search.md#result-list).

<a href="https://jsfiddle.net/ArthurClemens/hv8kcfs1/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { List, ListTile } from "polythene-react"

const listData = ["A", "B", "C", "D", "E"]

class KeyboardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: -1
    }
    this.handleKey = this.handleKey.bind(this)
  }
  
  handleKey(e) {
    const index = this.state.selectedIndex

    if (e.key === "ArrowDown") {
      e.preventDefault()
      const newIndex = Math.min(index + 1, listData.length - 1)
      this.setState({ selectedIndex: newIndex })
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const newIndex = Math.max(0, index - 1)
      this.setState({ selectedIndex: newIndex })
    } else if (e.key === "Escape") {
      this.setState({ selectedIndex: -1 })
    }
  }
  
  render() {
    const selectedIndex = this.state.selectedIndex
    return (
      <div onKeyDown={this.handleKey}>
        <List
          border
          tiles={listData.map((title, index) =>
            <ListTile
              title={title}
              key={title}
              hoverable
              selected={index === selectedIndex}
              className="themed-list-tile"
              events={{
                onClick: () => this.setState({ selectedIndex: index })
              }}
            />
          )}
        />
      </div>
    )
  }
}
~~~


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the list appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { ListCSS } from "polythene-css"

ListCSS.addStyle(".themed-list", {
  color_light_background: "#F57C00",
  color_light_border:     "#F57C00",
  color_dark_background:  "#5D4037",
  color_dark_border:      "#5D4037",
  padding: 32
})

<List className="themed-list" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [List CSS classes](../../../packages/polythene-css-classes/list.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/list"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<List
  style={{
    backgroundColor: "#EF6C00",
    color: "#fff"
  }}
/>
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of List content is reversed when the List is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


