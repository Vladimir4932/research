import meUser from '../fixtures/me-user.json'

describe('Email validation', () => {

    it('Visit to esanum', () => {
        cy.visit('/');
        // cy.get('esn-cookie-disclaimer').as('cookies');
        // cy.get('@cookies').find('sn-row').find('sn-col:nth-child(3)').click();
        cy.get('esn-cookie-disclaimer sn-row sn-col:nth-child(3)').click();
    });

    it('Login', () => {
        cy.get('esn-header esn-login-state sn-link').click();
        cy.get('sn-input[formcontrolname=username]').type(meUser.email);
        cy.get('sn-input[formcontrolname=password]').type(meUser.password);
        cy.get('button[type=submit]').click();
    });

    it('Go to main profile', () => {
        cy.get('esn-header esn-login-state sn-stack[data-user]').click();
        cy.get('sn-popover sn-link[data-profile]').click();
        cy.get('html').invoke('css', 'height', 'initial');
        cy.get('html').invoke('css', 'scroll-behavior', 'auto');
        cy.get('body').invoke('css', 'height', 'initial');
        cy.get('esn-header').invoke('css', 'position', 'relative');
        cy.get('esn-sub-header').invoke('css', 'position', 'relative');
    });

    it('Go to edit personal', () => {
        cy.get('sn-link[data-test=personal-edit]').click();
        cy.get('html').invoke('css', 'height', 'initial');
        cy.get('html').invoke('css', 'scroll-behavior', 'auto');
        cy.get('body').invoke('css', 'height', 'initial');
        cy.get('esn-header').invoke('css', 'position', 'relative');
        cy.get('esn-sub-header').invoke('css', 'position', 'relative');
    });



    it('Change email', () => {
        cy.get('input[type=email]').clear().type('vtarasov.sk2@gmail.com');
        cy.get('button[type=submit]').click();
        cy.get('sn-modal button').click();
    });

    it('Go to admin dashboard', () => {
        cy.visit('https://www.esanum.de/admin/');
        cy.get('input[name=username]').type(meUser.email);
        cy.get('input[type=password]').type(meUser.password);
        cy.get('input[type=submit]').click();
        cy.url().should('include', 'admin/');
    });

    const getIframeDocument = () => {
        return cy
            .get('iframe')
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        return getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }

    const regexp = /https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/;
    // const link = url.match(regexp);

    it.only('Find email', () => {
        cy.visit('https://www.esanum.de/admin/mailing/emailmessage/');
        cy.get('input[name=username]').type(meUser.email);
        cy.get('input[type=password]').type(meUser.password);
        cy.get('input[type=submit]').click();
        // cy.url().should('include', 'emailmessage/');
        cy.get('input[id=searchbar]').type('vtarasov.sk2@gmail.com');
        cy.get('input[type=submit]').click();
        cy.get('tbody tr:first-child a').click();
        cy.get('div#content h2:nth-child(2)').should('include.text', 'vtarasov.sk2@gmail.com');

        getIframeBody().find('a').each(a => {
            const link = (a.attr('href')).match(regexp);
            cy.log(link);

            // link.match(regexp);
            // cy.log(link);

        });
        // contains(/https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/g).click()

        // getIframeBody().find('a[href]').should('include.text', /https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/g).click()

        // getIframeBody().find('#result').should('include.text', '"delectus aut autem"')

        // cy.get('iframe');
        // cy.get('a[href]').contains(/https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/);
        // cy.contains('a[href]', /https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/);
        // cy.contains('a[href]', 'https://www.esanum.de/email-change-verification/xymw570adkxvsbo77jrzvuiyhja4uhcnpygyozrlpczkzctiiwy2jmjx8pfupqnc');
        // cy.get('a').invoke('href').contains(/https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/);
        // cy.contains(/https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/);
        // cy.get('iframe').click();
        // cy.get('a:visible:contains(href)')
        //     // .should('have.attr', 'href')
        //     .and('match', /https\:\/\/www\.esanum\.de\/email\-change\-verification\/(.*)/g);
    });

    it('Give link', () => {

    })
})