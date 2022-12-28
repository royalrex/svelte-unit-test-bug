import { mount } from 'cypress-svelte-unit-test';
import ReactiveComponent from './ReactiveComponent.svelte';
import { testStore } from './stores';

/**
 * first we show nothing
 * then we show default, which is the last node
 * then we tweak the store, so it should show the first case.
 * But because the nodes have been removed from the dom, but svelte is still referencing them.
 * Then we get an error.
 *
 * It does not happen when there is only two cases.
 */
//<div id="here"></div>
//language=HTML prefix=<body> suffix=</body>
const html = `
`;
//language=CSS
const style = `
    #container {
        background: white;
        padding: 1em;
        border: 3px solid black;
    }
`;

describe('Reactive component using data from a store', () => {
    // first test check that we can mount with default value and print "nothing"
    it('should work on first mount', () => {
        mount(ReactiveComponent, {});
        cy.contains('Case default').should('not.exist');
    });

    // on second mount we expect the component to write "Default case"
    it('should work on second mount', () => {
        mount(ReactiveComponent, {}, {
            html
        });
        testStore.set({
            numberValue: 1,
        });
        cy.contains('Case default').should('be.visible');
    });

    // on third mount, we tweak the store value so that 'Case default' is no longer visible and 'Case 2' should be visible
    // But it seems that the reactive nature listening
    it('should work on third mount', () => {
        mount(ReactiveComponent, {}, {
            html: '<div id="container"><div id="here"></div></div>', style
        });
        testStore.set({
            numberValue: 2,
        });
        cy.contains('Case 2').should('be.visible');
    });
});
