import { SearchCSS } from "polythene-css";
import results from "./components/results";

export default ({ h, a, Search, SearchField, Shadow, List, ListTile }) => {

  SearchCSS.addStyle(".tests-search-themed-search", {
    color_dark_input_text: "#fff",
    color_dark_background: "#43a047",
    font_size_input:       16
  });

  const Results = results({ h, a, List, ListTile, SearchField });

  const blockAttrs = attrs => ({
    style: Object.assign(
      {},
      {
        minHeight: "130px",
        overflow: "hidden" // hides top and side shadow with full width search field
      },
      attrs.dark ? { backgroundColor: "transparent" } : { backgroundColor: "#e4e4e4" },
      attrs.fullWidth
        ? null
        : { padding: "8px" }
    )
  });

  const Block = {
    view: ({ attrs }) => 
      h("form", blockAttrs(attrs), h(SearchField, attrs))
  };

  const ResultsBlock = {
    view: ({ attrs }) =>
      h("form", blockAttrs(attrs), h(Results, attrs))
  };

  return [
    {
      name: "Option: textfield",
      component: {
        view: () =>
          h(Search, {
            textfield: {
              label: "Search"
            },
            after: h(Shadow)
          })
      }
    },
    {
      name: "Option: textfield, buttons",
      component: {
        view: () =>
          h(Block)
      }
    },
    {
      name: "Option: textfield, buttons, fullWidth",
      component: {
        view: () =>
          h(Block, { fullWidth: true })
      }
    },
    {
      name: "With search results",
      component: {
        view: () =>
          h(ResultsBlock, { fullWidth: true })
      }
    },
    {
      name: "Option: style",
      component: {
        view: () =>
          h(Block, {
            style: { background: "#BBDEFB" }
          })
      }
    },

    {
      section: "Themed",
    },
    {
      name: "Theme",
      component: {
        view: () =>
          h(Block, {
            className: "tests-search-themed-search",
            tone: "dark"
          })
      }
    },
    {
      section: "Dark tone",
    },
    {
      name: "Theme -- dark tone class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h(Block, {
            className: "tests-search-themed-search",
            dark: true
          })
      }
    },
    {
      name: "Dark tone class + light tone class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h(Block, {
            className: "pe-light-tone",
            dark: true
          })
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-tone",
      component: {
        view: () =>
          h(Block, {
            tone: "light",
            dark: true
          })
      }
    },

    {
      section: "Right-to-left",
    },
    {
      name: "With search results (RTL)",
      component: {
        view: () =>
          h("div", { className: "pe-rtl" },
            h(ResultsBlock, { fullWidth: true })
          )
      }
    },
  ];
};
