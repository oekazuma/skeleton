/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import ProgressBar from '$lib/Progress/ProgressBar.svelte';
 
describe('ProgressBar.svelte', () => {
 
    afterEach(() => cleanup())
 
    it('Renders without props', async () => {
        const { getByTestId } = render(ProgressBar);
        expect(getByTestId('progress-wrapper')).toBeTruthy();
    });
     
    it('Renders with props', () => {
        const { getByTestId } = render(ProgressBar, {
            props: {
                label: 'Test',
                value: 50,
                max: 100,
                height: 'h-1',
                color: 'bg-warning-500',
            },
        });
        expect(getByTestId('progress-wrapper')).toBeTruthy();
    })
     
});