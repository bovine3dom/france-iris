install httpfs; load httpfs;
-- duckdb test.db
CREATE SECRET secret1 (
    type s3,
    key_id '6ed4c9ac211e',
    secret '003d564bb5cd93b244988f67d5830aebcfe0b899ef',
    endpoint 's3.eu-central-003.backblazeb2.com'
);

select * from read_table('s3://bovine3dom-population-density/part0.arrow') limit 1;
select * from read_parquet('https://s3.us-west-004.backblazeb2.com/metadaddy-public/t8.shakespeare.txt') limit 1;
