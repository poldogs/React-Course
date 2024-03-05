import React from 'react';
import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItem', () => {
    const title = 'Saitama';
    const url = 'https://onepunchman.fandom.com/wiki/Saitama';
    const id = '1234';

  test('matches the snapshot', () => {
    const { asFragment } = render(<GifItem {...{ title, url, id }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('must show an img with src and alt indicated', () => {
    const { src, alt } = render(<GifItem {...{ title, url, id }} />).container.querySelector('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('must show the title in the component', () => {
    render(<GifItem {...{ title, url, id }} />);
    expect(document.querySelector('p').textContent).toBe(title);
  });
  
});