(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["linq"] = factory();
	else
		root["linq"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LinQ to TypeScript
 *
 * Documentation from LinQ .NET specification (https://msdn.microsoft.com/en-us/library/system.linq.enumerable.aspx)
 *
 * Created by Flavio Corpa (@kutyel)
 * Copyright © 2016 Flavio Corpa. All rights reserved.
 *
 */
class List {
    /**
     * Defaults the elements of the list
     */
    constructor(elements = []) {
        this._elements = elements;
    }
    /**
     * Adds an object to the end of the List<T>.
     */
    Add(element) {
        this._elements.push(element);
    }
    /**
     * Adds the elements of the specified collection to the end of the List<T>.
     */
    AddRange(elements) {
        this._elements.push(...elements);
    }
    /**
     * Applies an accumulator function over a sequence.
     */
    Aggregate(accumulator, initialValue) {
        return this._elements.reduce(accumulator, initialValue);
    }
    /**
     * Determines whether all elements of a sequence satisfy a condition.
     */
    All(predicate) {
        return this._elements.every(predicate);
    }
    Any(predicate) {
        return predicate ? this._elements.some(predicate) : this._elements.length > 0;
    }
    Average(transform) {
        return this.Sum(transform) / this.Count(transform);
    }
    /**
     * Concatenates two sequences.
     */
    Concat(list) {
        return new List(this._elements.concat(list.ToArray()));
    }
    /**
     * Determines whether an element is in the List<T>.
     */
    Contains(element) {
        return this._elements.some(x => x === element);
    }
    Count(predicate) {
        return predicate ? this.Where(predicate).Count() : this._elements.length;
    }
    /**
     * Returns the elements of the specified sequence or the type parameter's default value
     * in a singleton collection if the sequence is empty.
     */
    DefaultIfEmpty(defaultValue) {
        return this.Count() ? this : new List([defaultValue]);
    }
    /**
     * Returns distinct elements from a sequence by using the default equality comparer to compare values.
     */
    Distinct() {
        return this.Where((value, index, iter) => iter.indexOf(value) === index);
    }
    /**
     * Returns distinct elements from a sequence according to specified key selector.
     */
    DistinctBy(keySelector) {
        const groups = this.GroupBy(keySelector, obj => obj);
        const results = new List();
        for (let index in groups) {
            if (groups.hasOwnProperty(index)) {
                results.Add(groups[index][0]);
            }
        }
        return results;
    }
    /**
     * Returns the element at a specified index in a sequence.
     */
    ElementAt(index) {
        if (index < this.Count()) {
            return this._elements[index];
        }
        else {
            const MSG = 'ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.';
            throw new Error(MSG);
        }
    }
    /**
     * Returns the element at a specified index in a sequence or a default value if the index is out of range.
     */
    ElementAtOrDefault(index) {
        return this.ElementAt(index) || undefined;
    }
    /**
     * Produces the set difference of two sequences by using the default equality comparer to compare values.
     */
    Except(source) {
        return this.Where(x => !source.Contains(x));
    }
    First(predicate) {
        if (this.Count()) {
            return predicate ? this.Where(predicate).First() : this._elements[0];
        }
        else {
            throw new Error('InvalidOperationException: The source sequence is empty.');
        }
    }
    FirstOrDefault(predicate) {
        return this.Count(predicate) ? this.First(predicate) : undefined;
    }
    /**
     * Performs the specified action on each element of the List<T>.
     */
    ForEach(action) {
        return this._elements.forEach(action);
    }
    /**
     * Groups the elements of a sequence according to a specified key selector function.
     */
    GroupBy(grouper, mapper) {
        return this.Aggregate((ac, v) => (ac[grouper(v)] ? ac[grouper(v)].push(mapper(v)) : ac[grouper(v)] = [mapper(v)], ac), {});
    }
    /**
     * Correlates the elements of two sequences based on equality of keys and groups the results.
     * The default equality comparer is used to compare keys.
     */
    GroupJoin(list, key1, key2, result) {
        return this.Select((x, y) => result(x, list.Where(z => key1(x) === key2(z))));
    }
    /**
     * Returns the index of the first occurence of an element in the List.
     */
    IndexOf(element) {
        return this._elements.indexOf(element);
    }
    /**
     * Inserts an element into the List<T> at the specified index.
     */
    Insert(index, element) {
        if (index < 0 || index > this._elements.length) {
            throw new Error('Index is out of range.');
        }
        this._elements.splice(index, 0, element);
    }
    /**
     * Produces the set intersection of two sequences by using the default equality comparer to compare values.
     */
    Intersect(source) {
        return this.Where(x => source.Contains(x));
    }
    /**
     * Correlates the elements of two sequences based on matching keys. The default equality comparer is used to compare keys.
     */
    Join(list, key1, key2, result) {
        return this.SelectMany(x => list.Where(y => key2(y) === key1(x)).Select(z => result(x, z)));
    }
    Last(predicate) {
        if (this.Count()) {
            return predicate ? this.Where(predicate).Last() : this._elements[this.Count() - 1];
        }
        else {
            throw Error('InvalidOperationException: The source sequence is empty.');
        }
    }
    LastOrDefault(predicate) {
        return this.Count(predicate) ? this.Last(predicate) : undefined;
    }
    /**
     * Returns the maximum value in a generic sequence.
     */
    Max() {
        return this.Aggregate((x, y) => x > y ? x : y);
    }
    /**
     * Returns the minimum value in a generic sequence.
     */
    Min() {
        return this.Aggregate((x, y) => x < y ? x : y);
    }
    /**
     * Sorts the elements of a sequence in ascending order according to a key.
     */
    OrderBy(keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComparerForKey(keySelector, false));
    }
    /**
     * Sorts the elements of a sequence in descending order according to a key.
     */
    OrderByDescending(keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComparerForKey(keySelector, true));
    }
    /**
     * Performs a subsequent ordering of the elements in a sequence in ascending order according to a key.
     */
    ThenBy(keySelector) {
        return this.OrderBy(keySelector);
    }
    /**
     * Performs a subsequent ordering of the elements in a sequence in descending order, according to a key.
     */
    ThenByDescending(keySelector) {
        return this.OrderByDescending(keySelector);
    }
    /**
     * Removes the first occurrence of a specific object from the List<T>.
     */
    Remove(element) {
        return this.IndexOf(element) !== -1 ? (this.RemoveAt(this.IndexOf(element)), true) : false;
    }
    /**
     * Removes all the elements that match the conditions defined by the specified predicate.
     */
    RemoveAll(predicate) {
        return this.Where(this._negate(predicate));
    }
    /**
     * Removes the element at the specified index of the List<T>.
     */
    RemoveAt(index) {
        this._elements.splice(index, 1);
    }
    /**
     * Reverses the order of the elements in the entire List<T>.
     */
    Reverse() {
        return new List(this._elements.reverse());
    }
    /**
     * Projects each element of a sequence into a new form.
     */
    Select(mapper) {
        return new List(this._elements.map(mapper));
    }
    /**
     * Projects each element of a sequence to a List<any> and flattens the resulting sequences into one sequence.
     */
    SelectMany(mapper) {
        return this.Aggregate((ac, v, i) => (ac.AddRange(this.Select(mapper).ElementAt(i).ToArray()), ac), new List());
    }
    /**
     * Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.
     */
    SequenceEqual(list) {
        return !!this._elements.reduce((x, y, z) => list._elements[z] === y ? x : undefined);
    }
    /**
     * Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
     */
    Single() {
        if (this.Count() !== 1) {
            throw new Error('The collection does not contain exactly one element.');
        }
        else {
            return this.First();
        }
    }
    /**
     * Returns the only element of a sequence, or a default value if the sequence is empty;
     * this method throws an exception if there is more than one element in the sequence.
     */
    SingleOrDefault() {
        return this.Count() ? this.Single() : undefined;
    }
    /**
     * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
     */
    Skip(amount) {
        return new List(this._elements.slice(Math.max(0, amount)));
    }
    /**
     * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
     */
    SkipWhile(predicate) {
        return this.Skip(this.Aggregate((ac, val) => predicate(this.ElementAt(ac)) ? ++ac : ac, 0));
    }
    Sum(transform) {
        return transform ? this.Select(transform).Sum() : this.Aggregate((ac, v) => ac += (+v), 0);
    }
    /**
     * Returns a specified number of contiguous elements from the start of a sequence.
     */
    Take(amount) {
        return new List(this._elements.slice(0, Math.max(0, amount)));
    }
    /**
     * Returns elements from a sequence as long as a specified condition is true.
     */
    TakeWhile(predicate) {
        return this.Take(this.Aggregate((ac, val) => predicate(this.ElementAt(ac)) ? ++ac : ac, 0));
    }
    /**
     * Copies the elements of the List<T> to a new array.
     */
    ToArray() {
        return this._elements;
    }
    /**
     * Creates a Dictionary<TKey, TValue> from a List<T> according to a specified key selector function.
     */
    ToDictionary(key, value) {
        return this.Aggregate((o, v, i) => (o[this.Select(key).ElementAt(i).toString()] = value ? this.Select(value).ElementAt(i) : v, o), {});
    }
    /**
     * Creates a List<T> from an Enumerable.List<T>.
     */
    ToList() {
        return this;
    }
    /**
     * Creates a Lookup<TKey, TElement> from an IEnumerable<T> according to specified key selector and element selector functions.
     */
    ToLookup(keySelector, elementSelector) {
        return this.GroupBy(keySelector, elementSelector);
    }
    /**
     * Produces the set union of two sequences by using the default equality comparer.
     */
    Union(list) {
        return this.Concat(list).Distinct();
    }
    /**
     * Filters a sequence of values based on a predicate.
     */
    Where(predicate) {
        return new List(this._elements.filter(predicate));
    }
    /**
     * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
     */
    Zip(list, result) {
        return list.Count() < this.Count() ? list.Select((x, y) => result(this.ElementAt(y), x)) :
            this.Select((x, y) => result(x, list.ElementAt(y)));
    }
    /**
     * Creates a function that negates the result of the predicate
     */
    _negate(predicate) {
        return function () {
            return !predicate.apply(this, arguments);
        };
    }
}
exports.List = List;
class ComparerHelper {
    static ComparerForKey(_keySelector, descending) {
        return (a, b) => {
            return ComparerHelper.Compare(a, b, _keySelector, descending);
        };
    }
    static Compare(a, b, _keySelector, descending) {
        let sortKeyA = _keySelector(a);
        let sortKeyB = _keySelector(b);
        if (sortKeyA > sortKeyB) {
            if (!descending) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (sortKeyA < sortKeyB) {
            if (!descending) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            return 0;
        }
    }
    static ComposeComparers(previousComparer, currentComparer) {
        return (a, b) => {
            let resultOfPreviousComparer = previousComparer(a, b);
            if (!resultOfPreviousComparer) {
                return currentComparer(a, b);
            }
            else {
                return resultOfPreviousComparer;
            }
        };
    }
}
/**
 * Represents a sorted sequence. The methods of this class are implemented by using deferred execution.
 * The immediate return value is an object that stores all the information that is required to perform the action.
 * The query represented by this method is not executed until the object is enumerated either by
 * calling its ToDictionary, ToLookup, ToList or ToArray methods
 */
class OrderedList extends List {
    constructor(elements, _comparer) {
        super(elements);
        this._comparer = _comparer;
        this._elements.sort(this._comparer);
    }
    /**
     * Performs a subsequent ordering of the elements in a sequence in ascending order according to a key.
     * @override
     */
    ThenBy(keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComposeComparers(this._comparer, ComparerHelper.ComparerForKey(keySelector, false)));
    }
    /**
     * Performs a subsequent ordering of the elements in a sequence in descending order, according to a key.
     * @override
     */
    ThenByDescending(keySelector) {
        return new OrderedList(this._elements, ComparerHelper.ComposeComparers(this._comparer, ComparerHelper.ComparerForKey(keySelector, true)));
    }
}
class Enumerable {
    /**
     * Generates a sequence of integral numbers within a specified range.
     */
    static Range(start, count) {
        let result = new List();
        while (count--) {
            result.Add(start++);
        }
        return result;
    }
    /**
     * Generates a sequence that contains one repeated value.
     */
    static Repeat(element, count) {
        let result = new List();
        while (count--) {
            result.Add(element);
        }
        return result;
    }
}
exports.Enumerable = Enumerable;


/***/ })
/******/ ]);
});