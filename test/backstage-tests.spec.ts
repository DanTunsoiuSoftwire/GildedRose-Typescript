import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Gilded Rose', function () {

    it('Check Backstage far', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 5) ]);
        var items = gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(8);
    });

    it('Check Backstage near', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10) ]);
        var items = gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(20);
        expect(items[0].sellIn).to.equal(3);
    });

    it('Check Backstage over', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 13) ]);
        var items = gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-2);
    });

});