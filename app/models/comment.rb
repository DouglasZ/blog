class Comment < ApplicationRecord
  belongs_to :article
  belongs_to :parent, optional: true, class_name: 'Comment'
  has_many :comments, foreign_key: :parent_id
end
