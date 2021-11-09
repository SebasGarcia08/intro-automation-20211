import {Selector} from 'testcafe'

fixture("Contact us feature").page('http://automationpractice.com/')

test('The contact us option is successfully', async (t) => {
    // Arrange
    const subjectHeading = "Webmaster"
    const emailAdress = "john.doe@test.com"
    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor commodo ex a ultrices. Suspendisse quis vulputate ante. Aenean maximus."

    // Act
    await t.click("#contact-link")
    await t.click("#id_contact")
    await t.click(Selector("#id_contact").withText(subjectHeading))
    await t.typeText("#email", emailAdress)
    await t.typeText("#message", message)
    await t.click("#submitMessage")

    // Assert
    await t.expect(Selector("#center_column p").textContent).eql("Your message has been successfully sent to our team.")

});
