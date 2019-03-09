
import testTextField from "polythene-tests-cypress/textfield/tests-react";

export default [
  {
    path: "/textfield",
    name: "Text Field",
    tests: testTextField,
  }
]
  .concat(testTextField.map(test => ({
    path: test.path,
    name: test.name,
    tests: [test],
  })))
;