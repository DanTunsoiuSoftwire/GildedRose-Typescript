import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Sulfurus Tests', function () {

    it('Check constant quality of Sulfurus', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 6, 7) ]);
        var items = gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
        expect(items[0].sellIn).to.equal(6);
    });

});