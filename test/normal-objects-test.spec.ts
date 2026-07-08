import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Gilded Rose', function () {

    it('Normal objects test far', function() {
        const gildedRose = new GildedRose([ new Item('Sword', 10, 15) ]);
        var items = gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(6);
    });

    it('Normal objects test near', function() {
        const gildedRose = new GildedRose([ new Item('Health Potion', 1, 20) ]);
        var items = gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
        expect(items[0].sellIn).to.equal(-3);
    });

    it('Normal objects test worthless', function() {
        const gildedRose = new GildedRose([ new Item('Self Poison Spell', 1, 1) ]);
        var items = gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-3);
    });

});