/// <reference types = "cypress"/>

describe("E2E - Click Action Checkbox", () => {
    it("Checkbox", () => {
        cy.visit("/simple-html-elements-for-automation/?fbclid=IwAR1y9LZ_FMGXW3m-VUJUdSo3RpsqMwMro2Rzw_1BwjE8_hSE6Shb5a8aW4Y")
        cy.get(".et_pb_blurb_7").find("[type=checkbox]").then(checkbox => {
            cy.get(checkbox).eq(0).check({ delay: 200 });
            cy.get(checkbox).eq(1).check({ delay: 200 }).invoke("prop", "checked").then(marked =>{
                cy.log(marked)
            });
        });

    })
})