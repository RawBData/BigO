/*

A graph that every node is another same graph

initial graph
                 1

         3              2
         5              4
                6
        8               7
                9

                10

    1->2,3,6
    2->1,3,4,5,6
    3->1,2,3,4,5
    4->3,5,6,7
    5->2,3,6,8
    6->1,2,3,4,5,6,7,8,9
    7->4,6,8,9
    8->5,6,7,9
    9->6,7,8,10
    10->9 value




*/