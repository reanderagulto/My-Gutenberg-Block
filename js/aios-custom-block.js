wp.blocks.registerBlockType('aios/custom-block', {
    title:      'AIOS Custom Block',
    icon:       'list-view',
    category:   'design',
    attributes: {
        companyName: { type: 'string' }, 
        companyPhone: { type: 'string' },
        companyAddress: { type: 'string' },
        companyAddress2: { type: 'string' },
        companyCity: { type: 'string' }, 
        companyState: { type: 'string' },
        companyZip: { type: 'string' }
    }, 
    edit: function(props) {
        return React.createElement(
          "div",
          null,
          /*#__PURE__*/ React.createElement(
            "label",
            {
              class: "form-control"
            },
            "Company Name"
          ),
          /*#__PURE__*/ React.createElement("input", {
            type: "text",
            class: "form-control",
            value: "",
            placeholder: "Company Name"
          }),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              class: "form-control"
            },
            "Company Phone"
          ),
          /*#__PURE__*/ React.createElement("input", {
            type: "text",
            class: "form-control",
            value: "",
            placeholder: "Company Phone"
          }),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              class: "form-control"
            },
            "Company Address"
          ),
          /*#__PURE__*/ React.createElement("input", {
            type: "text",
            class: "form-control",
            value: "",
            placeholder: "Company Address"
          }),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              class: "form-control"
            },
            "Company Address 2"
          ),
          /*#__PURE__*/ React.createElement("input", {
            type: "text",
            class: "form-control",
            value: "",
            placeholder: "Company Address 2"
          }),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              class: "form-control"
            },
            "Company City"
          ),
          /*#__PURE__*/ React.createElement("input", {
            type: "text",
            class: "form-control",
            value: "",
            placeholder: "Company City"
          }),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              class: "form-control"
            },
            "Company State"
          ),
          /*#__PURE__*/ React.createElement("input", {
            type: "text",
            class: "form-control",
            value: "",
            placeholder: "Company State"
          }),
          /*#__PURE__*/ React.createElement(
            "label",
            {
              class: "form-control"
            },
            "Company Zipcode"
          ),
          /*#__PURE__*/ React.createElement("input", {
            type: "text",
            class: "form-control",
            value: "",
            placeholder: "Company Zipcode"
          })
        );
    }, 
    save: function(props) {
        return null;
    }
})