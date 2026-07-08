import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
describe('Gilded Rose', function () {

    it('Aged Brie checking test', function() {
        let exampleGildedRose = new GildedRose([new Item("Aged Brie", 5, 10)]);
        let items = exampleGildedRose.updateQuality();
        items = exampleGildedRose.updateQuality();
        items = exampleGildedRose.updateQuality();
        items = exampleGildedRose.updateQuality();
        expect(items[0].quality).to.equal(14);
        expect(items[0].sellIn).to.equal(1);
        items = exampleGildedRose.updateQuality();
        items = exampleGildedRose.updateQuality();
        items = exampleGildedRose.updateQuality();
        items = exampleGildedRose.updateQuality();
        expect(items[0].quality).to.equal(21);
        expect(items[0].sellIn).to.equal(-3);
    });

});