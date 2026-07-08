import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
describe('Gilded Rose', function () {

    it('Golden Master Test', function() {
        let exampleGildedRose = new GildedRose([new Item("Boat", 10, 12), new Item("Plane", 1, 12),
            new Item("Sword", 5, 17), new Item("Backstage passes to a TAFKAL80ETC concert", 10, 12), new Item("Sulfuras, Hand of Ragnaros", 5, 20)]);
        let items = exampleGildedRose.updateQuality();
        exampleGildedRose.updateQuality();
        items = exampleGildedRose.updateQuality();
        expect(items[2].quality).to.equal(14);
        expect(items[1].quality).to.equal(7);
        expect(items[3].quality).to.equal(18);
        expect(items[0].quality).to.equal(9);
        expect(items[4].quality).to.equal(20);
    });

});