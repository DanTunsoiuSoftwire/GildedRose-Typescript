import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Test no items', function() {
        const gildedRose = new GildedRose();
        const items = gildedRose.updateQuality();
        expect(items.length).to.equal(0);
    });

});
