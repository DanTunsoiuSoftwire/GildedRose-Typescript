import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Conjured Mana Cake', function () {

    it('Check Conjured Mana Cake value', function() {
        const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 2, 25) ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
        expect(items[0].sellIn).to.equal(-2);
    });

});