import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	
	
	namespace: 'api',
	/*
	// set remote data source : looks for kosso.co.uk/api/posts 
	host:'http://kosso.co.uk',
	ajaxOptions: function(url, type, options) {
        var hash = this._super(url, type, options);
        hash.dataType = "jsonp";
        return hash;
    }
    */
});