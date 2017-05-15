
export default ({ button }) => {
  button.theme(".tests-button-themed-button", {
    color_light_background: "#2196F3",
    color_dark_background: "#2196F3",
    color_light_text: "#fff"
  });

  button.theme(".blue-on-dark-button", {
    color_dark_text: "#2196F3"
  });

  button.theme(".tests-button-bordered-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });
  return [
    {
      name: "Option: label",
      component: button,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Themed button: (option: borders)",
      component: button,
      attrs: {
        label: "Borders",
        className: "tests-button-bordered-button",
        borders: true
      }
    },
    {
      name: "Themed button (colors)",
      component: button,
      attrs: {
        label: "Themed button",
        className: "tests-button-themed-button"
      }
    },
    {
      name: "Option: style (colors)",
      component: button,
      attrs: {
        label: "Styled",
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    },
    {
      name: "Option: wash (false)",
      interactive: true,
      component: button,
      attrs: {
        label: "No wash",
        wash: false
      }
    },
    {
      name: "Option: ink (false)",
      interactive: true,
      component: button,
      attrs: {
        label: "No ink",
        ink: false
      }
    },
    {
      name: "Option: disabled (true)",
      interactive: true,
      component: button,
      attrs: {
        label: "Disabled",
        disabled: true
      }
    },
    {
      name: "Option: disabled (false)",
      interactive: true,
      component: button,
      attrs: {
        label: "Not disabled",
        disabled: false
      }
    },
    {
      name: "Option: selected",
      component: button,
      attrs: {
        label: "Selected",
        selected: true
      }
    },
    {
      name: "Option: formaction",
      component: button,
      attrs: {
        label: "Form action",
        formaction: "http://polythene.js.org"
      }
    },
    {
      name: "Option: url (without oncreate)",
      interactive: true,
      component: button,
      attrs: {
        label: "Go to /shadow",
        url: {
          href: "/shadow"
        }
      }
    },
    {
      name: "Option: inactive (false)",
      interactive: true,
      component: button,
      attrs: {
        label: "Not inactive",
        inactive: false
      }
    },
    {
      name: "Option: inactive (true)",
      interactive: true,
      component: button,
      attrs: {
        label: "Inactive",
        inactive: true
      }
    },
    {
      name: "Option: inactivate (2)",
      interactive: true,
      component: button,
      attrs: {
        label: "Inactivated for 2s",
        inactivate: 2
      }
    },

    // Dark tone class
    
    {
      name: "Option: label -- dark tone class",
      className: "pe-dark-tone",
      component: button,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Option: tone \"dark\" -- dark tone class",
      className: "test-dark-theme",
      component: button,
      attrs: {
        label: "Label",
        tone: "dark"
      }
    },
    {
      name: "Themed button -- dark tone class",
      className: "pe-dark-tone",
      component: button,
      attrs: {
        label: "Themed button",
        className: "tests-button-themed-button"
      }
    },
    {
      name: "Themed button blue on dark -- dark tone class",
      className: "pe-dark-tone",
      component: button,
      attrs: {
        label: "Blue on dark button",
        className: "blue-on-dark-button"
      }
    },
    {
      name: "Themed button: (option: borders) -- dark tone class",
      className: "pe-dark-tone",
      component: button,
      attrs: {
        label: "Borders dark tone",
        className: "tests-button-bordered-button",
        borders: true
      }
    },
  ];
};

