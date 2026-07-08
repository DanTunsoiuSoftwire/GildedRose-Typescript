import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
describe('Aged Brie Tests', function () {

    it('Quality Increases before sellIn', function() {
        let exampleGildedRose = new GildedRose([new Item("Aged Brie", 5, 10)]);
        exampleGildedRose.updateQuality();
        exampleGildedRose.updateQuality();
        exampleGildedRose.updateQuality();
        let items = exampleGildedRose.updateQuality();
        expect(items[0].quality).to.equal(14);
        expect(items[0].sellIn).to.equal(1);
    });

    it('Quality Increases after sellIn', function() {
        let exampleGildedRose = new GildedRose([new Item("Aged Brie", 1, 15)]);
        exampleGildedRose.updateQuality();
        exampleGildedRose.updateQuality();
        exampleGildedRose.updateQuality();
        let items = exampleGildedRose.updateQuality();
        expect(items[0].quality).to.equal(22);
        expect(items[0].sellIn).to.equal(-3);
    });

    it('Aged Brie maximum quality value', function() {
        let exampleGildedRose = new GildedRose([new Item("Aged Brie", 5, 49)]);
        exampleGildedRose.updateQuality();
        exampleGildedRose.updateQuality();
        exampleGildedRose.updateQuality();
        let items = exampleGildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
        expect(items[0].sellIn).to.equal(1);
    });

});