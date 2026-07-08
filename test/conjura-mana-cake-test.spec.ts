import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Gilded Rose', function () {

    it('Check Conjured Mana Cake', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 2, 25) ]);
        var items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
        expect(items[0].sellIn).to.equal(-2);
    });

});