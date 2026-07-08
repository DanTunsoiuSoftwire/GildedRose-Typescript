import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Gilded Rose', function () {

    it('Check Backstage far', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 5) ]);
        var items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(8);
    });

});