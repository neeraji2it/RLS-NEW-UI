class Image < ActiveRecord::Base
  if Rails.env == "production"
    has_attached_file :image,
      :storage => :s3,
      :whiny => false,
      :s3_credentials => "#{Rails.root}/config/s3.yml",
      :path => "uploaded_files/image/:id/:style/:basename.:extension",
      :bucket => S3_BUCKET_NAME,
      :styles => {
      :medium => ["270x2000#", :png],
      :original => ["870x420#", :png]
    }
  else
    has_attached_file :image,
      :styles => {
      :medium => ["270x200#", :png],
      :original => ["870x420#", :png]
    }
  end
  
  belongs_to :property
  attr_accessor :destroy
  validates_attachment_size(:image, :less_than => 5000.kilobytes)
  validates_attachment_content_type :image, :content_type => ['image/jpeg','image/jpg','image/tiff', 'image/png', 'image/gif','image/bmp', 'image/x-png', 'image/pjpeg']
end
