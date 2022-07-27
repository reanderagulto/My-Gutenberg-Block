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

      function updateCompanyName(event){ props.setAttributes( { companyName: event.target.value }) }
      function updateCompanyPhone(event){ props.setAttributes( { companyPhone: event.target.value }) }
      function updateCompanyAddress(event){ props.setAttributes( { companyAddress: event.target.value }) }
      function updateCompanyAddress2(event){ props.setAttributes( { companyAddress2: event.target.value }) }
      function updateCompanyCity(event){ props.setAttributes( { companyCity: event.target.value }) }
      function updateCompanyState(event){ props.setAttributes( { companyState: event.target.value }) }
      function updateCompanyZip(event){ props.setAttributes( { companyZip: event.target.value }) }

      return React.createElement(
          "div",
          null,
           React.createElement(
            "div",
            {
              class: "form-control"
            },
             React.createElement(
              "label",
              {
                class: "form-control"
              },
              "Company Name"
            ),
             React.createElement("br", null),
             React.createElement("input", {
              type: "text",
              class: "form-control",
              value: props.attributes.companyName,
              placeholder: "Company Name",
              onChange: updateCompanyName
            })
          ),
           React.createElement(
            "div",
            {
              class: "form-control"
            },
             React.createElement(
              "label",
              {
                class: "form-control"
              },
              "Company Phone"
            ),
             React.createElement("br", null),
             React.createElement("input", {
              type: "text",
              class: "form-control",
              value: props.attributes.companyPhone,
              placeholder: "Company Phone",
              onChange: updateCompanyPhone
            })
          ),
           React.createElement(
            "div",
            {
              class: "form-control"
            },
             React.createElement(
              "label",
              {
                class: "form-control"
              },
              "Company Address"
            ),
             React.createElement("br", null),
             React.createElement("input", {
              type: "text",
              class: "form-control",
              value: props.attributes.companyAddress,
              placeholder: "Company Address",
              onChange: updateCompanyAddress
            })
          ),
           React.createElement(
            "div",
            {
              class: "form-control"
            },
             React.createElement(
              "label",
              {
                class: "form-control"
              },
              "Company Address 2"
            ),
             React.createElement("br", null),
             React.createElement("input", {
              type: "text",
              class: "form-control",
              value: props.attributes.companyAddress2,
              placeholder: "Company Address 2",
              onChange: updateCompanyAddress2
            })
          ),
           React.createElement(
            "div",
            {
              class: "form-control"
            },
             React.createElement(
              "label",
              {
                class: "form-control"
              },
              "Company City"
            ),
             React.createElement("br", null),
             React.createElement("input", {
              type: "text",
              class: "form-control",
              value: props.attributes.companyCity,
              placeholder: "Company City",
              onChange: updateCompanyCity
            })
          ),
           React.createElement(
            "div",
            {
              class: "form-control"
            },
             React.createElement(
              "label",
              {
                class: "form-control"
              },
              "Company State"
            ),
             React.createElement("br", null),
             React.createElement("input", {
              type: "text",
              class: "form-control",
              value: props.attributes.companyState,
              placeholder: "Company State",
              onChange: updateCompanyState
            })
          ),
           React.createElement(
            "div",
            {
              class: "form-control"
            },
             React.createElement(
              "label",
              {
                class: "form-control"
              },
              "Company Zipcode"
            ),
             React.createElement("br", null),
             React.createElement("input", {
              type: "text",
              class: "form-control",
              value: props.attributes.companyZip,
              placeholder: "Company Zipcode",
              onChange: updateCompanyZip
            })
          )
        );
    }, 
    save: function(props) {
        return null;
    }
})