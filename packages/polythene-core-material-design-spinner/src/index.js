import classes from "polythene-css-classes/material-design-spinner";

const layer = (num, h) =>
  h("div",
    {
      key: num,
      className: [
        classes.layer,
        classes.layerN + num
      ].join(" ")
    },
    [
      h("div",
        {
          // key: "clipper-left",
          className: [
            classes.circleClipper,
            classes.circleClipperLeft
          ].join(" ")
        },
        h("div",
          {
            // key: "circle",
            className: classes.circle
          }
        )
      ),
      h("div",
        {
          // key: "gap-patch",
          className: classes.gapPatch
        },
        h("div", { className: classes.circle })
      ),
      h("div",
        {
          // key: "clipper-right",
          className: [
            classes.circleClipper,
            classes.circleClipperRight
          ].join(" ")
        }, h("div", { className: classes.circle })
      )
    ]
  );

export const _Spinner = ({ h, BaseSpinner, ...props }) => {
  const content = props.content || h("div",
    {
      // key: "content",
      className: classes.animation
    },
    [1,2,3,4].map(num => layer(num, h))
  );
  const componentProps = Object.assign({},
    props,
    {
      className: [classes.component, props.className].join(" "),
      content
    }
  );
  return h(BaseSpinner, componentProps);
};
