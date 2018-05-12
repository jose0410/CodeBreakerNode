var assert = require('assert');
var codeBreak=require('../functionTest/CodeBreaker');

describe('RomanTest',function(){
    describe('codebreakerTest',function(){
            it('its the secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("9831"),"XXXX");        
            });
            it('almost the secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("9832"),"XXX");        
            });
            it('desorder secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("1389"),"----");        
            });
            it('try again',function(){
                assert.equal(codeBreak.isTheSecretNumber("2456"),"");        
            });
            it('a half order secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("9138"),"XX--");        
            });
            it('not a number',function(){
                assert.equal(codeBreak.isTheSecretNumber("xxxx"),"Fake number");        
            });
            it('not a number either',function(){
                assert.equal(codeBreak.isTheSecretNumber("1xx1"),"Fake number");        
            });
            it('one digit less',function(){
                assert.equal(codeBreak.isTheSecretNumber("123"),"Invalid size");        
            });
            it('four digit more',function(){
                assert.equal(codeBreak.isTheSecretNumber(""),"Invalid size");        
            });
            it('two digit more',function(){
                assert.equal(codeBreak.isTheSecretNumber("123456"),"Invalid size");        
            });
            it('digit repeated',function(){
                assert.equal(codeBreak.isTheSecretNumber("1231"),"number with digits repeated");        
            });
            it('digit repeated',function(){
                assert.equal(codeBreak.isTheSecretNumber("1223"),"number with digits repeated");        
            });
            it('digit repeated',function(){
                assert.equal(codeBreak.isTheSecretNumber("1233"),"number with digits repeated");        
            });
        });

});
