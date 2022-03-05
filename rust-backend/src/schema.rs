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
    fields (id) {
        id -> Int4,
        country_id -> Int4,
        producing_area_id -> Int4,
    }
}

table! {
    producing_areas (id) {
        id -> Int4,
        producing_area_name -> Text,
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
        field_id -> Int4,
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

joinable!(fields -> countries (country_id));
joinable!(fields -> producing_areas (producing_area_id));
joinable!(single_malt_wisky_list -> existence_statuses (existence_id));
joinable!(single_malt_wisky_list -> fields (field_id));

allow_tables_to_appear_in_same_query!(
    countries,
    existence_statuses,
    fields,
    producing_areas,
    single_malt_wisky_list,
    users,
);
