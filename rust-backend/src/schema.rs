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
        status -> Text,
        price -> Int4,
        created_at -> Timestamp,
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

allow_tables_to_appear_in_same_query!(
    producing_areas,
    scotch,
    users,
);
