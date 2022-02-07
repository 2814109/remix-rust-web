table! {
    alcohol (id) {
        id -> Int4,
        name -> Varchar,
    }
}
table! {
    classification (id) {
        id -> Int4,
        name -> Varchar,
        alcohol_id -> Int4,
    }
}


table! {
    distinguish (id) {
        id -> Int4,
        name -> Varchar,
        classification_id -> Int4,
    }
}

table! {
    label (id) {
        id -> Int4,
        name -> Varchar,
        distinguish_id -> Int4,
    }
}



joinable!(classification -> alcohol (alcohol_id));
joinable!(distinguish -> classification (classification_id));
joinable!(label -> distinguish (distinguish_id));


allow_tables_to_appear_in_same_query!(
    classification,
    alcohol,
    distinguish,
    label
);