import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateShortUrlsTable1613239552683 implements MigrationInterface {
  private readonly table = new Table({
    name: 'short-urls',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'url_id',
        type: 'uuid',
        isNullable: false,
      },
      {
        name: 'short-url',
        type: 'varchar',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false,
      },
    ],
  });

  private readonly urlForeignKey = new TableForeignKey({
    name: 'UrlShortUrl',
    columnNames: ['url_id'],
    referencedTableName: 'urls',
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);

    await queryRunner.createForeignKey(this.table, this.urlForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
