$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("integration/specs/todoitem/ToDoItemSpec_findAndComplete.feature");
formatter.feature({
  "id": "find-and-complete-todo-items",
  "tags": [
    {
      "name": "@ToDoItemsFixture",
      "line": 17
    }
  ],
  "description": "",
  "name": "Find And Complete ToDo Items",
  "keyword": "Feature",
  "line": 18,
  "comments": [
    {
      "value": "#",
      "line": 1
    },
    {
      "value": "#  Licensed to the Apache Software Foundation (ASF) under one or more",
      "line": 2
    },
    {
      "value": "#  contributor license agreements.  See the NOTICE file distributed with",
      "line": 3
    },
    {
      "value": "#  this work for additional information regarding copyright ownership.",
      "line": 4
    },
    {
      "value": "#  The ASF licenses this file to You under the Apache License, Version 2.0",
      "line": 5
    },
    {
      "value": "#  (the \"License\"); you may not use this file except in compliance with",
      "line": 6
    },
    {
      "value": "#  the License.  You may obtain a copy of the License at",
      "line": 7
    },
    {
      "value": "#",
      "line": 8
    },
    {
      "value": "#     http://www.apache.org/licenses/LICENSE-2.0",
      "line": 9
    },
    {
      "value": "#",
      "line": 10
    },
    {
      "value": "#  Unless required by applicable law or agreed to in writing, software",
      "line": 11
    },
    {
      "value": "#  distributed under the License is distributed on an \"AS IS\" BASIS,",
      "line": 12
    },
    {
      "value": "#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.",
      "line": 13
    },
    {
      "value": "#  See the License for the specific language governing permissions and",
      "line": 14
    },
    {
      "value": "#  limitations under the License.",
      "line": 15
    },
    {
      "value": "#",
      "line": 16
    }
  ]
});
formatter.before({
  "duration": 7521056,
  "status": "passed"
});
formatter.before({
  "duration": 127648183,
  "status": "passed"
});
formatter.scenario({
  "id": "find-and-complete-todo-items;todo-items-once-completed-are-no-longer-listed",
  "tags": [
    {
      "name": "@unit",
      "line": 24
    }
  ],
  "description": "",
  "name": "Todo items once completed are no longer listed",
  "keyword": "Scenario",
  "line": 25,
  "type": "scenario",
  "comments": [
    {
      "value": "# the scenario is listed twice here just to demonstrate that it",
      "line": 20
    },
    {
      "value": "# can be run either at @unit-level scope (using mocks) or",
      "line": 21
    },
    {
      "value": "# at @integration-level scope (against the running system).",
      "line": 22
    }
  ]
});
formatter.step({
  "name": "there are a number of incomplete ToDo items",
  "keyword": "Given ",
  "line": 26
});
formatter.step({
  "name": "I choose the first of the incomplete items",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "mark the item as complete",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "the item is no longer listed as incomplete",
  "keyword": "Then ",
  "line": 29
});
formatter.match({
  "location": "ToDoItemGlue.there_are_a_number_of_incomplete_ToDo_items()"
});
formatter.result({
  "duration": 910505847,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.I_choose_the_first_one()"
});
formatter.result({
  "duration": 211724,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.mark_it_as_complete()"
});
formatter.result({
  "duration": 32599724,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.the_item_is_no_longer_listed_as_incomplete()"
});
formatter.result({
  "duration": 1952369,
  "status": "passed"
});
formatter.after({
  "duration": 647670,
  "status": "passed"
});
formatter.before({
  "duration": 6469304,
  "status": "passed"
});
formatter.before({
  "duration": 230339534,
  "status": "passed"
});
formatter.scenario({
  "id": "find-and-complete-todo-items;todo-items-once-completed-are-no-longer-listed",
  "tags": [
    {
      "name": "@integration",
      "line": 32
    }
  ],
  "description": "",
  "name": "Todo items once completed are no longer listed",
  "keyword": "Scenario",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "there are a number of incomplete ToDo items",
  "keyword": "Given ",
  "line": 34
});
formatter.step({
  "name": "I choose the first of the incomplete items",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "mark the item as complete",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "the item is no longer listed as incomplete",
  "keyword": "Then ",
  "line": 37
});
formatter.match({
  "location": "ToDoItemGlue.there_are_a_number_of_incomplete_ToDo_items()"
});
formatter.result({
  "duration": 39069936,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.I_choose_the_first_one()"
});
formatter.result({
  "duration": 121503,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.mark_it_as_complete()"
});
formatter.result({
  "duration": 2848494,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.the_item_is_no_longer_listed_as_incomplete()"
});
formatter.result({
  "duration": 39507000,
  "status": "passed"
});
formatter.after({
  "duration": 15640530,
  "status": "passed"
});
formatter.uri("integration/specs/todoitem/ToDoItemSpec_findCompletedAndMarkAsNotYetComplete.feature");
formatter.feature({
  "id": "find-completed-todoitem-and-mark-as-not-yet-complete",
  "tags": [
    {
      "name": "@ToDoItemsFixture",
      "line": 17
    }
  ],
  "description": "",
  "name": "Find completed ToDoItem and mark as not yet complete",
  "keyword": "Feature",
  "line": 18,
  "comments": [
    {
      "value": "#",
      "line": 1
    },
    {
      "value": "#  Licensed to the Apache Software Foundation (ASF) under one or more",
      "line": 2
    },
    {
      "value": "#  contributor license agreements.  See the NOTICE file distributed with",
      "line": 3
    },
    {
      "value": "#  this work for additional information regarding copyright ownership.",
      "line": 4
    },
    {
      "value": "#  The ASF licenses this file to You under the Apache License, Version 2.0",
      "line": 5
    },
    {
      "value": "#  (the \"License\"); you may not use this file except in compliance with",
      "line": 6
    },
    {
      "value": "#  the License.  You may obtain a copy of the License at",
      "line": 7
    },
    {
      "value": "#",
      "line": 8
    },
    {
      "value": "#     http://www.apache.org/licenses/LICENSE-2.0",
      "line": 9
    },
    {
      "value": "#",
      "line": 10
    },
    {
      "value": "#  Unless required by applicable law or agreed to in writing, software",
      "line": 11
    },
    {
      "value": "#  distributed under the License is distributed on an \"AS IS\" BASIS,",
      "line": 12
    },
    {
      "value": "#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.",
      "line": 13
    },
    {
      "value": "#  See the License for the specific language governing permissions and",
      "line": 14
    },
    {
      "value": "#  limitations under the License.",
      "line": 15
    },
    {
      "value": "#",
      "line": 16
    }
  ]
});
formatter.before({
  "duration": 6044600,
  "status": "passed"
});
formatter.before({
  "duration": 273617269,
  "status": "passed"
});
formatter.scenario({
  "id": "find-completed-todoitem-and-mark-as-not-yet-complete;todo-items-can-be-uncompleted",
  "tags": [
    {
      "name": "@integration",
      "line": 24
    }
  ],
  "description": "",
  "name": "Todo items can be uncompleted",
  "keyword": "Scenario",
  "line": 25,
  "type": "scenario",
  "comments": [
    {
      "value": "# the scenario is listed twice here just to demonstrate that it",
      "line": 20
    },
    {
      "value": "# can be run either at @unit-level scope (using mocks) or",
      "line": 21
    },
    {
      "value": "# at @integration-level scope (against the running system).",
      "line": 22
    }
  ]
});
formatter.step({
  "name": "a completed item",
  "keyword": "Given ",
  "line": 26
});
formatter.step({
  "name": "I mark the item as not yet complete",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "the item is listed as incomplete",
  "keyword": "Then ",
  "line": 28
});
formatter.match({
  "location": "ToDoItemGlue.a_completed_ToDo_item()"
});
formatter.result({
  "duration": 42289565,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.I_mark_it_as_not_yet_complete()"
});
formatter.result({
  "duration": 1031039,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.the_item_is_listed_as_incomplete()"
});
formatter.result({
  "duration": 32751704,
  "status": "passed"
});
formatter.after({
  "duration": 8743685,
  "status": "passed"
});
formatter.before({
  "duration": 304249,
  "status": "passed"
});
formatter.before({
  "duration": 1186759,
  "status": "passed"
});
formatter.scenario({
  "id": "find-completed-todoitem-and-mark-as-not-yet-complete;todo-items-can-be-uncompleted",
  "tags": [
    {
      "name": "@unit",
      "line": 31
    }
  ],
  "description": "",
  "name": "Todo items can be uncompleted",
  "keyword": "Scenario",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "a completed ToDo item",
  "keyword": "Given ",
  "line": 33
});
formatter.step({
  "name": "I mark the item as not yet complete",
  "keyword": "When ",
  "line": 34
});
formatter.step({
  "name": "the item is listed as incomplete",
  "keyword": "Then ",
  "line": 35
});
formatter.match({
  "location": "ToDoItemGlue.a_completed_ToDo_item()"
});
formatter.result({
  "duration": 1478789,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.I_mark_it_as_not_yet_complete()"
});
formatter.result({
  "duration": 102091,
  "status": "passed"
});
formatter.match({
  "location": "ToDoItemGlue.the_item_is_listed_as_incomplete()"
});
formatter.result({
  "duration": 968681,
  "status": "passed"
});
formatter.after({
  "duration": 170106,
  "status": "passed"
});
});