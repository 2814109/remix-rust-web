table! {
    countries (id) {
        id -> Int4,
        country_name -> Text,
    }
}

table! {
    existence_statuses (id) {
        id -> Int4,
        status -> Text,
    }
}

table! {
    producing_areas (id) {
        id -> Int4,
        producing_area_name -> Text,
        country_id -> Int4,
    }
}

table! {
    single_malt_wisky_list (id) {
        id -> Int4,
        age -> Int4,
        label -> Text,
        edition -> Text,
        existence_id -> Int4,
        price -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        producing_area_id -> Int4,
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

joinable!(producing_areas -> countries (country_id));
joinable!(single_malt_wisky_list -> existence_statuses (existence_id));
joinable!(single_malt_wisky_list -> producing_areas (producing_area_id));

allow_tables_to_appear_in_same_query!(
    countries,
    existence_statuses,
    producing_areas,
    single_malt_wisky_list,
    users,
);
