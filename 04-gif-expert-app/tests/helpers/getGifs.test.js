import { getGifs } from '../../src/helpers/getGifs';

describe('getGifs', () => {
  it('returns an array of gifs', async () => {
    const gifs = await getGifs('test');
    expect(Array.isArray(gifs)).toBe(true);
    expect(gifs.length).toBeGreaterThan(0);
  });

  it('returns gifs with the correct shape', async () => {
    const gifs = await getGifs('test');
    for (let gif of gifs) {
      expect(gif).toHaveProperty('id');
      expect(gif).toHaveProperty('title');
      expect(gif).toHaveProperty('url');
    }
  });
});