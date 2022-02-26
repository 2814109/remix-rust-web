table! {
    producing_areas (id) {
        id -> Int4,
        name -> Text,
    }
}

table! {
    scotch (id) {
        id -> Int4,
        producing_area_id -> Int4,
        age -> Text,
        label -> Text,
        edition -> Text,
        existence_id -> Int4,
        price -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    status_of_existence (id) {
        id -> Int4,
        status -> Text,
    }
}

table! {
    users (id) {
        id -> Int4,
        first_name -> Text,
        last_name -> Text,
        email -> Text,
        created_at -> Timestamp,
    }
}

joinable!(scotch -> producing_areas (producing_area_id));
joinable!(scotch -> status_of_existence (existence_id));

allow_tables_to_appear_in_same_query!(
    producing_areas,
    scotch,
    status_of_existence,
    users,
);
