(function ($) {
  AblePlayer.prototype.getSupportedLangs = function() {
    // returns an array of languages for which AblePlayer has translation tables
    // Removing 'nl' as of 2.3.54, pending updates
    var langs = ['ca','de','en','es','fr','he','it','ja','nb','zh-tw', 'ru'];
    return langs;
  };

  AblePlayer.prototype.getTranslationText = function() {
    // determine language, then get labels and prompts from corresponding translation var
    var deferred, thisObj, lang, thisObj, msg, translationFile;
    deferred = $.Deferred();

    thisObj = this;

    // get language of the web page, if specified
    if ($('body').attr('lang')) {
      lang = $('body').attr('lang');
    }
    else if ($('html').attr('lang')) {
      lang = $('html').attr('lang');
    }
    else {
      lang = null;
    }

    // override this.lang to language of the web page, if known and supported
    // otherwise this.lang will continue using default
    if (!this.forceLang) {
      if (lang) {
        if (lang !== this.lang) {
          msg = 'Language of web page (' + lang +') ';
          if ($.inArray(lang,this.getSupportedLangs()) !== -1) {
            // this is a supported lang
            msg += ' has a translation table available.';
            this.lang = lang;
          }
          else {
            msg += ' is not currently supported. Using default language (' + this.lang + ')';
          }
          if (this.debug) {
            console.log(msg);
          }
        }
      }
    }
    if (!this.searchLang) {
      this.searchLang = this.lang;
    }
    // translationFile = '/' + 'translations/' + this.lang + '.js';
    // translationFile = this.rootPath + '/' + 'translations/' + this.lang + '.js';
    // translationFile = this.rootPath + this.lang + '.js'; // на сайт
    // translationFile = "/static/" + this.lang + '.js';
    translationFile =  'https://courses.openedu.ru/asset-v1:urfu+Inclus_M1+fall_2019+type@asset+block@' + this.lang + '.js';  // на платформу
    // translationFile = this.rootPath.slice(0, -1) + this.lang + '.js';
    // console.log("this.rootPath: ", this.rootPath);
    this.importTranslationFile(translationFile).then(function(result) {
      thisObj.tt = thisObj.getTranslation(thisObj.lang);
      // thisObj.tt = eval(thisObj.lang);
      console.log("thisObj.tt: ", thisObj.tt);
      deferred.resolve();
    });
    return deferred.promise();
  };

  AblePlayer.prototype.importTranslationFile = function(translationFile) {

    var deferred = $.Deferred();

    $.getScript(translationFile)
      .done(function(translationVar,textStatus) {
        // translation file successfully retrieved
        deferred.resolve(translationVar);
      })
      .fail(function(jqxhr, settings, exception) {
        deferred.fail();
        // error retrieving file
        // TODO: handle this
      });
    // deferred.resolve({});

    return deferred.promise();
  };

})(jQuery);
