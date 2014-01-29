/**
 * Created by Dmitry on 29.01.14.
 */
var parser = require('./parser');

parser.getMatches("In theoretical computer sex science and formal language theory, a regular expression (abbreviated regex or regexp)" +
                  " is a sequence of characters that forms a search pattern, mainly for use in pattern matching with strings," +
                  "or string matching-like operations. The concept arose in the 1950s, when the American mathematician Stephen Kleene"+
                  "formalized the description of a regular language, and came into common use with the Unix text processing utilities ed"+
                  "An editor, and grep (global regular expression print), a filter.", /(sex)|(president)/gi);