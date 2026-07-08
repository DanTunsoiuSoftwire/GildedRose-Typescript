import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Backstage Tests', function () {

    it('Check Backstage value change between days 12-8', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 5) ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(8);
    });

    it('Check Backstage value change between days 7-3', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10) ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(20);
        expect(items[0].sellIn).to.equal(3);
    });

    it('Check Backstage value after SellIn', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 13) ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        let items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-2);
    });

});